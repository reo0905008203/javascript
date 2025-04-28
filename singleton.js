class DBConnection {
    constructor() {
      if (DBConnection.instance) {
        return DBConnection.instance;
      }
      console.log("Khởi tạo kết nối Database!");
      DBConnection.instance = this;
    }
  
    connect() {
      console.log("Đã kết nối database.");
    }
  }
  
  // Test
  const conn1 = new DBConnection();
  const conn2 = new DBConnection();
  
  conn1.connect();
  console.log(conn1 === conn2);
  