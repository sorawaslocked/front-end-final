const fakeDb = {
  users: {
    getAllUsers: function() {
      return DB.users;
    },
    getById: function(id) {
      return DB.users.find(user => user.id == id);
    },
    addUser: function(user) {
      DB.users.push(user);
    },
    deleteById: function(id) {
      DB.users = DB.users.filter(user => user.id != id);
    }
  },
  items: {
    getById: function(id) {
      return DB.items.find(item => item.id == id);
    },
    getAllByCategory: function(categorySimple) {
      return DB.items.filter(item => item.category.simple == categorySimple);
    },
    getAllWithSales: function() {
      return DB.items.filter(item => item.discountPercent > 0);
    },
    getAllByIds: function(ids) {
      return ids.map(id => this.getById(id)).filter(item => item !== undefined);
    },
    getCategoryName: function(categorySimple) {
      let item = DB.items.find(item => item.category.simple === categorySimple);
      return item ? item.category.full : null;
    }
  },
  orders: {
    getAllByUserId: function(userId) {
      return DB.orders.filter(order => order.userId == userId);
    }
  }
};
