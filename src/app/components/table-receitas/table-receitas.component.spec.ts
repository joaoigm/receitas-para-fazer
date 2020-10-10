import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableReceitasComponent } from './table-receitas.component';

describe('TableReceitasComponent', () => {
  let component: TableReceitasComponent;
  let fixture: ComponentFixture<TableReceitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableReceitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
