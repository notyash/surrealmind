DEFINE TABLE OVERWRITE promotionRequest SCHEMAFULL
    PERMISSIONS
        FOR select, create, update WHERE workspace IN $auth->memberOf.out
        FOR delete WHERE author = $auth OR workspace.owner = $auth;

    DEFINE FIELD OVERWRITE fromScope ON promotionRequest TYPE record<scope> ASSERT record::exists($value);
    DEFINE FIELD OVERWRITE toScope ON promotionRequest TYPE record<scope> ASSERT record::exists($value);
    DEFINE FIELD OVERWRITE originalDraft ON promotionRequest TYPE string;
    DEFINE FIELD OVERWRITE reviewedFact ON promotionRequest TYPE string;
    DEFINE FIELD OVERWRITE author ON promotionRequest TYPE record<user | agent> ASSERT record::exists($value); 
    DEFINE FIELD OVERWRITE workspace ON promotionRequest TYPE record<workspace> ASSERT record::exists($value);

    DEFINE FIELD OVERWRITE status ON promotionRequest TYPE "pending" | "approved" | "rejected" DEFAULT "pending";

    DEFINE FIELD OVERWRITE requestedAt ON promotionRequest TYPE datetime DEFAULT time::now() READONLY;

    DEFINE FIELD OVERWRITE reviewedBy ON promotionRequest TYPE option<record<user>>; 
    DEFINE FIELD OVERWRITE reviewedAt ON promotionRequest TYPE option<datetime>;
    DEFINE FIELD OVERWRITE rejectionReason ON promotionRequest TYPE option<string>;
    DEFINE FIELD OVERWRITE idempotencyKey ON promotionRequest TYPE option<string>;

DEFINE INDEX OVERWRITE promotion_scope_status_idx ON promotionRequest FIELDS workspace, toScope, status;
DEFINE INDEX OVERWRITE promotion_idempotency_idx ON promotionRequest FIELDS idempotencyKey;
