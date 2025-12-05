import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user-service';
import { provideHttpClient } from '@angular/common/http';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should verify getAllUsers', () => {
    const dummyUsers = [
      { id: 1, name: 'Leanne Graham' },
      { id: 2, name: 'Ervin Howell' }
    ];
    service.getAllUsers().subscribe((users: any) => {
      expect(users).toEqual(dummyUsers);
      expect(users.length).toBe(2);
    });
    // Expect the GET request
    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(req.request.method).toBe('GET');
    // Respond with mock data
    req.flush(dummyUsers);
  });
});
