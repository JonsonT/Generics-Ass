class ArrayUtils {
  /**
   * Counts the number of elements in the given array that have the specified property.
   *
   * @param array The array to count elements in.
   * @param property The property to check for each element.
   * @returns The number of elements in the array that have the specified property.
   */
  static countElementsWithProperty<T>(
    array: T[],
    property: Property<T>
  ): number {
    let count = 0;
    for (const element of array) {
      if (property.hasProperty(element)) {
        count++;
      }
    }
    return count;
  }
}

/**
 * An interface for a property that can be checked for an element.
 */
interface Property<T> {
  /**
   * Returns true if the given element has the property, false otherwise.
   *
   * @param element The element to check for the property.
   * @returns true if the element has the property, false otherwise.
   */
  hasProperty(element: T): boolean;
}

/**
 * A property that checks if a number is odd.
 */
class OddProperty implements Property<number> {
  /**
   * Returns true if the given number is odd, false otherwise.
   *
   * @param element The number to check if it is odd.
   * @returns true if the number is odd, false otherwise.
   */
  hasProperty(element: number): boolean {
    return element % 2 !== 0;
  }
}

/**
 * A property that checks if a number is prime.
 */
class PrimeProperty implements Property<number> {
  /**
   * Returns true if the given number is prime, false otherwise.
   *
   * @param element The number to check if it is prime.
   * @returns true if the number is prime, false otherwise.
   */
  hasProperty(element: number): boolean {
    if (element < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(element); i++) {
      if (element % i === 0) {
        return false;
      }
    }
    return true;
  }
}

/**
 * A property that checks if a string is a palindrome.
 */
class PalindromeProperty implements Property<string> {
  /**
   * Returns true if the given string is a palindrome, false otherwise.
   *
   * @param element The string to check if it is a palindrome.
   * @returns true if the string is a palindrome, false otherwise.
   */
  hasProperty(element: string): boolean {
    const length = element.length;
    for (let i = 0; i < length / 2; i++) {
      if (element.charAt(i) !== element.charAt(length - i - 1)) {
        return false;
      }
    }
    return true;
  }
}
/**
 * A class representing a person with a name and an ID.
 */
class Person {
  name: string;
  id: number;

  /**
   * Creates a new person with the given name and ID.
   *
   * @param name The name of the person.
   * @param id The ID of the person.
   */
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }

  /**
   * Returns the name of the person.
   *
   * @returns The name of the person.
   */
  getName(): string {
    return this.name;
  }

  /**
   * Sets the name of the person.
   *
   * @param name The new name of the person.
   */
  setName(name: string): void {
    this.name = name;
  }

  /**
   * Returns the ID of the person.
   *
   * @returns The ID of the person.
   */
  getId(): number {
    return this.id;
  }

  /**
   * Sets the ID of the person.
   *
   * @param id The new ID of the person.
   */
  setId(id: number): void {
    this.id = id;
  }
}

/**
 * A property that checks if a person's ID is a palindrome.
 */
class PalindromeIdProperty implements Property<Person> {
  /**
   * Returns true if the ID of the given person is a palindrome, false otherwise.
   *
   * @param person The person to check the ID of.
   * @returns true if the ID is a palindrome, false otherwise.
   */
  hasProperty(person: Person): boolean {
    let id = person.getId();
    let reversedId = 0;
    const originalId = id;
    while (id > 0) {
      reversedId = reversedId * 10 + (id % 10);
      id = Math.floor(id / 10);
    }
    return originalId === reversedId;
  }
}

const people: Person[] = [
  new Person("Alice", 12321),
  new Person("Bob", 12345),
  new Person("Charlie", 12343),
];

const countPalindromeIds = ArrayUtils.countElementsWithProperty(
  people,
  new PalindromeIdProperty()
);
console.log(countPalindromeIds); // Outputs: 1
