class NorthShipping {
    calculateFee(weight) {
      return weight * 5;
    }
  }
  
  class SouthShipping {
    calculateFee(weight) {
      return weight * 3;
    }
  }
  
  class Order {
    constructor(strategy) {
      this.strategy = strategy;
    }
  
    getShippingFee(weight) {
      return this.strategy.calculateFee(weight);
    }
  }
  
  // Test
  const orderNorth = new Order(new NorthShipping());
  console.log("Phí vận chuyển miền Bắc:", orderNorth.getShippingFee(10));
  
  const orderSouth = new Order(new SouthShipping());
  console.log("Phí vận chuyển miền Nam:", orderSouth.getShippingFee(10));
  