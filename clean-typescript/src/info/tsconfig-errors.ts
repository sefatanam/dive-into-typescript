
function allowUnreachableCode() {
  if (true) {
    return 1;
  } else {
    return 0;
  }
}


function allowUnusedLabel() {
  if (true) {
    message: {
      console.log('This is a label');
      return 'Label executed';
    }
  }
}

// example of noImplicitOverride
class Album {
  download() {
    console.log('Downloading album...');
  }
}

class SharedAlbum extends Album {
  override download() {
    console.log('Downloading shared album...');
  }
}

// example fo noImplicitThis
class Rectangle {
  width: number = 10;
  height: number = 10;

  getArea() {
    // return this.width * this.height;
    return function () {
      return function () {
        this.width * this.height; // This will cause an error if noImplicitThis is enabled
      }
    }
  }
}

