import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodCatalogComponent } from './food-catalog.component';

describe('FoodCatalogComponent', () => {
  let component: FoodCatalogComponent;
  let fixture: ComponentFixture<FoodCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodCatalogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
