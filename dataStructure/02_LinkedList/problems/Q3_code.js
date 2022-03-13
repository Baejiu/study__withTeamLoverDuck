function solution(bridge_length, weight, truck_weights) {
  const bridge = new Bridge();
  let counter = 0;
  let index = 0;

  bridge.initBridge(bridge_length, weight);

  while (truck_weights[index]) {
    counter++;
    bridge.handleTruck();

    if (bridge.weight >= bridge.now_weight + truck_weights[index]) {
      bridge.setTruck(truck_weights[index]);
      index++;
    }
  }
  return counter + bridge.length;
}

class Bridge {
  constructor() {
    this.start = null;
    this.end = null;
    this.weight = null;
    this.now_weight = 0;
    this.length = null;
  }
  initBridge(bridge_length, weight) {
    this.weight = weight;
    this.length = bridge_length;
    const newNode = new BridgeNode(0);
    this.start = newNode;
    this.end = newNode;
    for (let i = 1; i < bridge_length; i++) {
      const newNode = new BridgeNode();
      this.end.next = newNode;
      this.end = newNode;
    }
  }
  setTruck(weight) {
    const newTruck = new Truck(weight);
    this.start.truck = newTruck;
    this.now_weight = this.now_weight + newTruck.weight;
  }
  handleTruck() {
    let prev = new BridgeNode();
    prev.next = this.start;
    let temp = this.start;
    let next = this.start.next;
    for (let i = 1; i < this.length - 1; i++) {
      temp = next;
      next = temp.next;
    }
    this.start = prev;
    temp.next = null;
    this.end = temp;
    if (next && next.truck) {
      this.now_weight = this.now_weight - next.truck.weight;
    }
  }
}
class BridgeNode {
  constructor() {
    this.truck = null;
    this.next = null;
  }
}
class Truck {
  constructor(weight) {
    this.weight = weight;
  }
}
