import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListCardComponent } from './pokemon-list-card.component';

describe('PokemonListCardComponent', () => {
    let component: PokemonListCardComponent;
    let fixture: ComponentFixture<PokemonListCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PokemonListCardComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PokemonListCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
