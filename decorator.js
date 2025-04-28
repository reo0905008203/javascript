class Order {
    cost() {
      return 100;
    }
  }
  
  class GiftWrap {
    constructor(order) {
      this.order = order;
    }
  
    cost() {
      return this.order.cost() + 10;
    }
  }
  
  // Test
  const basicOrder = new Order();
  console.log("Giá gốc:", basicOrder.cost());
  
  const wrappedOrder = new GiftWrap(basicOrder);
  console.log("Giá sau khi bọc quà:", wrappedOrder.cost());
  