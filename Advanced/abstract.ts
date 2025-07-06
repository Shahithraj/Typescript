// class can be used as interface

// abstract class cannot able to create new Object

abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getVideo(): void;

  // below cannot be done by interface
  getReelsTime(): number {
    return 10;
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getVideo(): void {
    console.log('get video');
  }
}

const obj = new Instagram('test', 'test', 10);
obj.getReelsTime();
