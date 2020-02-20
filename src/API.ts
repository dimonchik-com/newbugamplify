/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateWordInput = {
  id?: string | null,
  en: string,
  ru?: string | null,
  statusLearn?: boolean | null,
  isAddInWorkout?: boolean | null,
  collectionID: string,
  owner: string,
  myCreatedAt: string,
  myUpdatedAt: string,
};

export type ModelWordConditionInput = {
  en?: ModelStringInput | null,
  ru?: ModelStringInput | null,
  statusLearn?: ModelBooleanInput | null,
  isAddInWorkout?: ModelBooleanInput | null,
  collectionID?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  myCreatedAt?: ModelStringInput | null,
  myUpdatedAt?: ModelStringInput | null,
  and?: Array< ModelWordConditionInput | null > | null,
  or?: Array< ModelWordConditionInput | null > | null,
  not?: ModelWordConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateWordInput = {
  id: string,
  en?: string | null,
  ru?: string | null,
  statusLearn?: boolean | null,
  isAddInWorkout?: boolean | null,
  collectionID?: string | null,
  owner?: string | null,
  myCreatedAt?: string | null,
  myUpdatedAt?: string | null,
};

export type DeleteWordInput = {
  id?: string | null,
};

export type ModelWordFilterInput = {
  id?: ModelIDInput | null,
  en?: ModelStringInput | null,
  ru?: ModelStringInput | null,
  statusLearn?: ModelBooleanInput | null,
  isAddInWorkout?: ModelBooleanInput | null,
  collectionID?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  myCreatedAt?: ModelStringInput | null,
  myUpdatedAt?: ModelStringInput | null,
  and?: Array< ModelWordFilterInput | null > | null,
  or?: Array< ModelWordFilterInput | null > | null,
  not?: ModelWordFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateWordMutationVariables = {
  input: CreateWordInput,
  condition?: ModelWordConditionInput | null,
};

export type CreateWordMutation = {
  createWord:  {
    __typename: "Word",
    id: string,
    en: string,
    ru: string | null,
    statusLearn: boolean | null,
    isAddInWorkout: boolean | null,
    collectionID: string,
    owner: string,
    myCreatedAt: string,
    myUpdatedAt: string,
  } | null,
};

export type UpdateWordMutationVariables = {
  input: UpdateWordInput,
  condition?: ModelWordConditionInput | null,
};

export type UpdateWordMutation = {
  updateWord:  {
    __typename: "Word",
    id: string,
    en: string,
    ru: string | null,
    statusLearn: boolean | null,
    isAddInWorkout: boolean | null,
    collectionID: string,
    owner: string,
    myCreatedAt: string,
    myUpdatedAt: string,
  } | null,
};

export type DeleteWordMutationVariables = {
  input: DeleteWordInput,
  condition?: ModelWordConditionInput | null,
};

export type DeleteWordMutation = {
  deleteWord:  {
    __typename: "Word",
    id: string,
    en: string,
    ru: string | null,
    statusLearn: boolean | null,
    isAddInWorkout: boolean | null,
    collectionID: string,
    owner: string,
    myCreatedAt: string,
    myUpdatedAt: string,
  } | null,
};

export type GetWordQueryVariables = {
  id: string,
};

export type GetWordQuery = {
  getWord:  {
    __typename: "Word",
    id: string,
    en: string,
    ru: string | null,
    statusLearn: boolean | null,
    isAddInWorkout: boolean | null,
    collectionID: string,
    owner: string,
    myCreatedAt: string,
    myUpdatedAt: string,
  } | null,
};

export type ListWordsQueryVariables = {
  filter?: ModelWordFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWordsQuery = {
  listWords:  {
    __typename: "ModelWordConnection",
    items:  Array< {
      __typename: "Word",
      id: string,
      en: string,
      ru: string | null,
      statusLearn: boolean | null,
      isAddInWorkout: boolean | null,
      collectionID: string,
      owner: string,
      myCreatedAt: string,
      myUpdatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type SelectByOwnerCollectionIdQueryVariables = {
  collectionID?: string | null,
  myCreatedAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelWordFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SelectByOwnerCollectionIdQuery = {
  selectByOwnerCollectionId:  {
    __typename: "ModelWordConnection",
    items:  Array< {
      __typename: "Word",
      id: string,
      en: string,
      ru: string | null,
      statusLearn: boolean | null,
      isAddInWorkout: boolean | null,
      collectionID: string,
      owner: string,
      myCreatedAt: string,
      myUpdatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type SelectByOwnerCollectionWordQueryVariables = {
  owner?: string | null,
  myCreatedAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelWordFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SelectByOwnerCollectionWordQuery = {
  selectByOwnerCollectionWord:  {
    __typename: "ModelWordConnection",
    items:  Array< {
      __typename: "Word",
      id: string,
      en: string,
      ru: string | null,
      statusLearn: boolean | null,
      isAddInWorkout: boolean | null,
      collectionID: string,
      owner: string,
      myCreatedAt: string,
      myUpdatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateWordSubscription = {
  onCreateWord:  {
    __typename: "Word",
    id: string,
    en: string,
    ru: string | null,
    statusLearn: boolean | null,
    isAddInWorkout: boolean | null,
    collectionID: string,
    owner: string,
    myCreatedAt: string,
    myUpdatedAt: string,
  } | null,
};

export type OnUpdateWordSubscription = {
  onUpdateWord:  {
    __typename: "Word",
    id: string,
    en: string,
    ru: string | null,
    statusLearn: boolean | null,
    isAddInWorkout: boolean | null,
    collectionID: string,
    owner: string,
    myCreatedAt: string,
    myUpdatedAt: string,
  } | null,
};

export type OnDeleteWordSubscription = {
  onDeleteWord:  {
    __typename: "Word",
    id: string,
    en: string,
    ru: string | null,
    statusLearn: boolean | null,
    isAddInWorkout: boolean | null,
    collectionID: string,
    owner: string,
    myCreatedAt: string,
    myUpdatedAt: string,
  } | null,
};
