// tslint:disable
// this is an auto generated file. This will be overwritten

export const getWord = /* GraphQL */ `
  query GetWord($id: ID!) {
    getWord(id: $id) {
      id
      en
      ru
      statusLearn
      isAddInWorkout
      collectionID
      owner
      myCreatedAt
      myUpdatedAt
    }
  }
`;
export const listWords = /* GraphQL */ `
  query ListWords(
    $filter: ModelWordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        en
        ru
        statusLearn
        isAddInWorkout
        collectionID
        owner
        myCreatedAt
        myUpdatedAt
      }
      nextToken
    }
  }
`;
export const selectByOwnerCollectionId = /* GraphQL */ `
  query SelectByOwnerCollectionId(
    $collectionID: String
    $myCreatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelWordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    selectByOwnerCollectionId(
      collectionID: $collectionID
      myCreatedAt: $myCreatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        en
        ru
        statusLearn
        isAddInWorkout
        collectionID
        owner
        myCreatedAt
        myUpdatedAt
      }
      nextToken
    }
  }
`;
export const selectByOwnerCollectionWord = /* GraphQL */ `
  query SelectByOwnerCollectionWord(
    $owner: String
    $myCreatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelWordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    selectByOwnerCollectionWord(
      owner: $owner
      myCreatedAt: $myCreatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        en
        ru
        statusLearn
        isAddInWorkout
        collectionID
        owner
        myCreatedAt
        myUpdatedAt
      }
      nextToken
    }
  }
`;
