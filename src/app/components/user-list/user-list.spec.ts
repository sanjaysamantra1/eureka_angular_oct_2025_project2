import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserList } from './user-list';

xdescribe('UserList', () => {
  let component: UserList;
  let fixture: ComponentFixture<UserList>;

  beforeAll(()=>{ // 1
    console.log('Before All')
  })
  afterAll(()=>{ // 1
    console.log('After All')
  })

  beforeEach(async () => { // 2
    console.log('Before Each')
    await TestBed.configureTestingModule({
      imports: [UserList]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  afterEach(()=>{ // 2 - N
    console.log('After Each')
  })

  it('should create', () => {
    console.log('It-1')
    expect(component).toBeTruthy();
  });
  it('should verify addNewCar Function', () => {
    console.log('It-2')
    expect(component.cars).toBeDefined();
    expect(component.cars.length).toBe(3);
    expect(component.cars).toContain('tata');
    expect(component.cars).not.toContain('audi');
    component.addNewCar('toyota')
    expect(component.cars).toBeDefined();
    expect(component.cars.length).toBe(4);
    expect(component.cars).toContain('tata');
    expect(component.cars).toContain('toyota');
    expect(component.cars).not.toContain('audi');
    expect(component.cars).toEqual(['tata', 'honda', 'maruti', 'toyota'])
  });
});
