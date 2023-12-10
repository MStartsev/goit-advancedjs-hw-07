// Клас Key
class Key {
  private signature: string;

  constructor() {
    this.signature = `key_${Math.random()}`;
  }

  getSignature(): string {
    return this.signature;
  }
}

// Клас Person
class Person {
  constructor(private name: string, private key: Key) {
    this.key = key;
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  getKey(): Key {
    return this.key;
  }

  setKey(newKey: Key): void {
    this.key = newKey;
  }
}

// Абстрактний клас House
abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[];

  constructor(key: Key) {
    this.door = false;
    this.key = key;
    this.tenants = [];
  }

  getTenants(): void {
    let message: string = "There is no one in the house.";

    const tenantsList: string[] = this.tenants.map((tenant: Person) =>
      tenant.getName()
    );

    if (tenantsList.length) {
      message = `Tenants in the house: ${tenantsList.join(", ")}.`;
    }

    console.log(message);
  }

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log(`${person.getName()} came in.`);
    } else {
      console.log("The door is currently locked. Please use a valid key.");
    }
  }
}

// Клас MyHouse, що успадковується від House
class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("The door is open.");
    } else {
      this.door = false;
      console.log("Invalid key. The door remains closed.");
    }
  }
}

// Сценарій
const validKey = new Key();
const invalidKey = new Key();

const house = new MyHouse(validKey);

const catTom = new Person("Tom", validKey);
const dogBob = new Person("Bob", invalidKey);

house.getTenants(); // There is no one in the house.

house.openDoor(catTom.getKey()); // The door is open.
house.comeIn(catTom); // Tom came in.

house.openDoor(dogBob.getKey()); // Invalid key. The door remains closed.
house.comeIn(dogBob); // The door is currently locked. Please use a valid key.

dogBob.setKey(validKey);
house.openDoor(dogBob.getKey()); // The door is open.
house.comeIn(dogBob); // Bob came in.

house.getTenants(); // Tenants in the house: Tom, Bob.

export {};
