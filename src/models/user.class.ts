export class User {
  img: string;
  firstName: string;
  lastName: string;
  department: string;
  email: string;
  birthDate: number;
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
    this.department = obj ? obj.department : "";
    this.email = obj ? obj.email : "";
    this.birthDate = obj ? obj.birthDate : "";
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
      firstName: this.firstName,
      lastName: this.lastName,
      department: this.department,
      email: this.email,
      birthDate: this.birthDate,
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
