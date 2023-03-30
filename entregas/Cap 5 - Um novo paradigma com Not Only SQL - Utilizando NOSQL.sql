use FiapFase6Cap5

db.createCollection("usuario")
db.usuario.createIndex({email: 1}, {unique: true})

db.createCollection("evento")
db.createCollection("evento_participantes")

db.usuario.insertMany([
   {
      _id: ObjectId('59a6f9f6633aab53fa6309f1'),
      nome: "Elio Lima",
      email: "elio.designer@hotmail.com",
      senha: "Ab@123456"
   },
   {
      _id: ObjectId('59a6f810976eee51664ab55d'),
      nome: "Andrei Vedovato",
      email: "andrei.vedovato@gmail.com",
      senha: "Ab@123456"
   },
   {
      _id: ObjectId('5997676b741cf671f8b349fe'),
      nome: "Rafaela Rosso",
      email: "rafa.rosso@gmail.com",
      senha: "Ab@123456"
   }
]);


db.evento.insertMany([
   {
      _id: ObjectId('59a6f85b22401e5203235123'),
      usuarioId: ObjectId('59a6f9f6633aab53fa6309f1'),
      titulo: "Corrida Noturna",
      descricao: "Corrida noturna de biciclea todas terças",
      data: new ISODate("2023-03-05T22:00:00.000Z")
   },
   {
      _id: ObjectId('59a6f85b22401e52002551e7'),
      usuarioId: ObjectId('59a6f810976eee51664ab55d'),
      titulo: "Yoga no parque",
      descricao: "Relaxamento no parque",
      data: new ISODate("2023-03-10T06:00:00.000Z")
   },
   {
      _id: ObjectId('59a6f704c91df250741eae45'),
      usuarioId: ObjectId('5997676b741cf671f8b349fe'),
      titulo: "Academia ao Ar-Livre",
      descricao: "Encontro dos amigo para treinar no parque",
      data: new ISODate("2023-03-15T08:00:00.000Z")
   },
]);

db.evento.updateOne(
   { _id: ObjectId("59a6f85b22401e5203235123") },
   { $set: { descricao: "Corrida noturna de biciclea ", } }
)

db.evento.updateOne(
   { _id: ObjectId("59a6f85b22401e52002551e7") },
   { $set: { descricao: "Relaxamento no parque todas terças", } }
)

db.evento.deleteOne(
   { _id: ObjectId("59a6f704c91df250741eae45") }
)


db.evento_participante.insertMany([
   {
      _id: ObjectId('5994c1ee25a04d3c2417c82d'),
      eventoId: ObjectId('59a6f85b22401e5203235123'),
      descricao: "Estou muito ancioso para este evento",
      data: new Date()
   },
   {
      _id: ObjectId('5994c17e25a04d3c241ac81e'),
      eventoId: ObjectId('59a6f810976eee51664ab55d'),
      titulo: "Yoga no parque",
      descricao: "Vou me relaxar muito",
      data: new Date()
   },
   {
      _id: ObjectId('5994c17e25a04d3c2417b81e'),
      eventoId: ObjectId('59a6f704c91df250741eae45'),
      descricao: "Não vejo a hora de encontrar os amigo",
      data: new Date()
   },
]);


db.evento_participante.updateOne(
   { _id: ObjectId("5994c1ee25a04d3c2417c82d") },
   { $set: { descricao: "Não vejo a hora.", } }
)

db.evento_participante.updateOne(
   { _id: ObjectId("5994c17e25a04d3c241ac81e") },
   { $set: { descricao: "Vou me relaxar.", } }
)

db.evento_participante.deleteOne(
   { eventoId: ObjectId("59a6f704c91df250741eae45") }
)


db.evento.deleteOne(
   { _id: ObjectId("59a6f704c91df250741eae45") }
)