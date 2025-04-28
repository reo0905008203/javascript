class Subject {
    constructor() {
      this.observers = [];
    }
  
    subscribe(observer) {
      this.observers.push(observer);
    }
  
    notify(data) {
      this.observers.forEach(observer => observer.update(data));
    }
  }
  
  class EmailService {
    update(data) {
      console.log(`Gửi email thông báo: ${data}`);
    }
  }
  
  // Test
  const subject = new Subject();
  const emailService = new EmailService();
  
  subject.subscribe(emailService);
  subject.notify("Người dùng mới đăng ký: Nguyen Van A");
  