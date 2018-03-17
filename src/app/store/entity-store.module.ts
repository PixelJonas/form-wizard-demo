import { NgModule } from '@angular/core';
import { EntityMetadataMap, NgrxDataModule } from 'ngrx-data';

export const entityMetadata: EntityMetadataMap = {
  User: {},
};

export const pluralNames = {
  User: 'Users',
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
