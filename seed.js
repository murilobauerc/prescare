const Sequelize = require('sequelize')
const settings = require('./settings')

const databaseConnection = new Sequelize(settings.DATABASE_URL, {
  dialect: "postgres",
  define: {
    underscored: true,
    timestamps: false
  }
})

const models = require('./src/models')(databaseConnection)

const seedDatabase = models => () => {
  models.Acolhido.findOrCreate({
    where: { nome: "Josicleiso Dores" },
    defaults: {
      nome: "Josicleiso Dores",
      idade: 12,
      rg: "123456",
      peso: 12.5,
      alergias: "Paracetamol",
      viaAlimentacao: "Oral"
    }
  }).spread((acolhido, created) => {
    if (!created) {
      return;
    }

    models.Prescricao.create({
      data: Date.now(),
      validade: Date.now(),
      acolhido_id: acolhido.id
    }).then(prescricao => {
      models.Medicamento.create({
        nome: "Dorflex",
        intervalo: "8h-8h",
        via: "Oral",
        formaFarmaceutica: "Paracetamol",
        dosagem: "1cp",
        validade: "2018",
        lote: "213213iu1griusadoas",
        prescricao_id: prescricao.id
      }).then(() => {
        models.Cuidado.create({
          descricao: "Dar banho",
          intervalo: "12h-12h",
          observacoes: "Com Jhonsons Baby",
          prescricao_id: prescricao.id
        }).then(() => {
          models.Dieta.create({
            tipo: "Hipercalórica",
            intervalo: "12h-12h",
            prescricao_id: prescricao.id
          });
        });
      });
    });
  });
}

databaseConnection
  .sync()
  .then(seedDatabase(models))
  .then(process.exit)
