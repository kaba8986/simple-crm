export class User {
  img: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date;
  birthDateString: string;
  street: string;
  zipCode: number;
  city: string;
  phone: string;
  mobile: string;
  skype: string;
  twitter: string;

  constructor(obj?: any) {
    this.img = 'profile0';
    this.firstName = obj ? obj.firstName : "";
    this.lastName = obj ? obj.lastName : "";
    this.email = obj ? obj.email : "";
    this.birthDate = obj ? obj.birthDate : new Date();
    this.birthDateString = obj ? obj.birthDateString : "";
    this.street = obj ? obj.street : "";
    this.zipCode = obj ? obj.zipCode : "";
    this.city = obj ? obj.city : "";
    this.phone = obj ? obj.phone : "";
    this.mobile = obj ? obj.mobile : "";
    this.skype = obj ? obj.skype : "";
    this.twitter = obj ? obj.twitter : "";
  }

  public toJSON() {
    return {
      img: this.img,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      birthDate: this.birthDate,
      birthDateString: this.birthDateString,
      street: this.street,
      zipCode: this.zipCode,
      city: this.city,
      phone: this.phone,
      mobile: this.mobile,
      skype: this.skype,
      twitter: this.twitter
    }
  }
}
