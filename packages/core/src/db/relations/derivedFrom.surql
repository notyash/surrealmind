DEFINE TABLE OVERWRITE derivedFrom TYPE RELATION IN promotionRequest OUT promotionRequest SCHEMAFULL
    PERMISSIONS 
        FOR select, create WHERE in.workspace IN $auth->memberOf.out
        FOR delete WHERE in.workspace.owner = $auth;

    DEFINE FIELD OVERWRITE createdAt ON derivedFrom TYPE datetime DEFAULT time::now() READONLY;

DEFINE INDEX OVERWRITE unique_derived_from_idx ON derivedFrom FIELDS in, out UNIQUE;
