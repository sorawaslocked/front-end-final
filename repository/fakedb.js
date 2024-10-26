const DB = {
    users: {
        data: USERS_FROM_DB,
        getAllUsers: function() {
            return this.data;
        },
        
        getById: function(id) {
            return this.data.find(user => user.id == id);
        },

        addUser: function(user) {
            this.data.push(user);
        },

        deleteById: function(id) {
            this.data = this.data.filter(user => user.id != id);
        },
    },

    items: {
        data: ITEMS_FROM_DB,

        getById: function(id) {
            return this.data.find(item => item.id == id);
        },

        getAllByCategory: function(categorySimple) {
            return this.data.filter(item => item.category.simple == categorySimple);
        },

        getAllWithSales: function() {
            return this.data.filter(item => item.discountPercent > 0);
        }
    },

    orders: {
        data: ORDERS_FROM_DB,

        getAllByUserId: function(userId) {
            return this.data.filter(order => order.userId == userId);
        }
    }
};
