const DB = {
    users: {
        data: USERS_FROM_DB,
        getAllUsers: () => {
            return this.data
        },
        
        getById: (id) => {
            return this.data.find(user => user.id == id)
        },

        addUser: (user) => {
            this.data.push(user)
        },

        deleteById: (id) => {
            this.data = this.data.filter(user => user.id != id)
        },
    },

    items: {
        data: ITEMS_FROM_DB,

        getById: (id) => {
            return this.data.find(item => item.id == id)
        },

        getAllByCategory: (categorySimple) => {
            return this.data.filter(item => item.category.simple == categorySimple)
        },

        getAllWithSales: () => {
            return this.data.filter(item => item.discountPercent > 0)
        }
    }
}