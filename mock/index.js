import Mock from 'mockjs'

export const audios = Mock.mock(/\/list/, 'get', function () {
    const data = []

    const pagination = {
        total: data.length,
        page_total: 1,
        page: 1
    }

    return {
        code: 0,
        data,
        pagination
    }
})
