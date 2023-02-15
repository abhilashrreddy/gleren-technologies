import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  createDb() {
    return {
      users: [
        {
          id: 1,
          city: 'Mumbai',
          name: 'Tom Johnson',
          email: 'cap@cap.com',
          phoneNumber: '9058463541',
        },
        {
          id: 2,
          city: 'Delhi',
          name: 'John Khan',
          email: 'shirt@shirt.com',
          phoneNumber: '$8465789645',
        },
        {
          id: 3,
          city: 'Pune',
          name: 'Thomas Miller',
          email: 'pack@pack.com',
          phoneNumber: '$6874965412',
        },
      ],
    };
  }
}
