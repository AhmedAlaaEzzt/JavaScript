class Project {}

class SoftwareProject extends Project {
  static getIdPrefix() {
    return 111;
  }
}

class HardwareProject extends Project {
  static getIdPrefix() {
    return 222;
  }
}

let softwareProect = new SoftwareProject();
let hardwareProect = new HardwareProject();
