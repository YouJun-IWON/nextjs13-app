migrate((db) => {
  const collection = new Collection({
    "id": "mff2j3dgzni4965",
    "created": "2023-06-17 11:36:00.855Z",
    "updated": "2023-06-17 11:36:00.855Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ujebbfoa",
        "name": "Posts",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("mff2j3dgzni4965");

  return dao.deleteCollection(collection);
})
