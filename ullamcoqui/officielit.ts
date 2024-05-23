class ZipCode {
  private _zipCode: string;

  constructor(zipCode: string) {
    if (!this.isValidZipCode(zipCode)) {
      throw new Error('Invalid ZIP code format.');
    }
    this._zipCode = zipCode;
  }

  private isValidZipCode(zipCode: string): boolean {
    const zipCodePattern = /^\d{5}(-\d{4})?$/;
    return zipCodePattern.test(zipCode);
  }

  get zipCode(): string {
    return this._zipCode;
  }

  set zipCode(value: string) {
    if (!this.isValidZipCode(value)) {
      throw new Error('Invalid ZIP code format.');
    }
    this._zipCode = value;
  }
}

// Usage
try {
  const myZipCode = new ZipCode("90566-7771");
  console.log(`The ZIP code is: ${myZipCode.zipCode}`);
} catch (error) {
  console.error(error);
}
