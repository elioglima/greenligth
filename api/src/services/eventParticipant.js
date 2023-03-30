const httpHelper = require('../utils/httpHelper')
const db = require('../database')

const find = async ({ queryStringParameters }) => {
    try {
        const params = queryStringParameters || {}
        const query = {
            ...params.eventoId ? { eventoId: params?.eventoId } : {}
        }
        const response = await db.eventParticipant.find(query)
        return httpHelper.ok(response)
    } catch (error) {
        return httpHelper.badRequest(error)
    }
}

const update = async ({ queryStringParameters, body }) => {
    try {
        const params = queryStringParameters
        const value = JSON.parse(body)
        const filter = { id: params?.codigo }
        const response = await db.eventParticipant.update(filter, value)
        return httpHelper.ok(response)
    } catch (error) {
        return httpHelper.badRequest(error)
    }
}

const insert = async ({
    body
}) => {
    try {
        const value = JSON.parse(body)
        const response = await db.eventParticipant.insert(value)
        return httpHelper.ok(response)
    } catch (error) {
        return httpHelper.badRequest(error)
    }
}

const remove = async ({ queryStringParameters }) => {
    try {
        const params = queryStringParameters
        if (!params?.codigo) {
            return httpHelper.notFound()
        }
        const response = await db.eventParticipant.remove(params?.codigo)
        return httpHelper.ok(response)
    } catch (error) {
        return httpHelper.badRequest(error)
    }
}


module.exports = {
    find,
    insert,
    update,
    remove
}