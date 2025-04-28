class Button {
    click() {
      console.log("Clicked button!");
    }
  }
  
  class WinButton extends Button {
    click() {
      console.log("Clicked Windows Button");
    }
  }
  
  class MacButton extends Button {
    click() {
      console.log("Clicked Mac Button");
    }
  }
  
  function ButtonFactory(osType) {
    if (osType === "Windows") {
      return new WinButton();
    } else if (osType === "Mac") {
      return new MacButton();
    } else {
      return new Button();
    }
  }
  
  // Test
  const button = ButtonFactory("Windows");
  button.click();
  