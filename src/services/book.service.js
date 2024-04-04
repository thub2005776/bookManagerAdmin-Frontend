import createApiClient from './api.service';

class BookService {
    constructor (baseUrl = '/books')  {
        this.book = createApiClient(baseUrl);
    }

    async getAll() {
        return (await this.book.get('/')).data;
    }

    async getOne(email) {
        return (await this.book.get(`/${email}`)).data;
    }

    async create(data) {
        return (await this.book.post('/', data)).data;
    }

    async update(id, data) {
        return (await this.book.post(`/${id}`, data)).data;
    }

    async delete(id) {
        return (await this.book.delete(`/${id}`)).data;
    }

    async addFavorite(id, data) {
        return (await this.book.post(`/favorite/${id}`, data)).data;
    }
}

export default new BookService();