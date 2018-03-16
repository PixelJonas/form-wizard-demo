import { NgModule } from '@angular/core';
import { EntityMetadataMap, NgrxDataModule } from 'ngrx-data';

export const entityMetadata: EntityMetadataMap = {
  Aircraft: {},
  Part: {},
  Order: {},
};

export const pluralNames = {
  Aircraft: 'Aircrafts',
  Part: 'Parts',
  Order: 'Orders',
};

@NgModule({
  imports: [
    NgrxDataModule.forRoot({
      entityMetadata,
      pluralNames,
    }),
  ],
  declarations: [],
})
export class EntityStoreModule {
}
