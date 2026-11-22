DEFINE TABLE OVERWRITE promotionRequest SCHEMAFULL
        PERMISSIONS FULL;

    DEFINE FIELD OVERWRITE fromScope ON promotionRequest TYPE string;
    DEFINE FIELD OVERWRITE toScope ON promotionRequest TYPE string;
    DEFINE FIELD OVERWRITE originalDraft ON promotionRequest TYPE string;
    DEFINE FIELD OVERWRITE reviewedFact ON promotionRequest TYPE string;
    DEFINE FIELD OVERWRITE author ON promotionRequest TYPE record<user>; 
    DEFINE FIELD OVERWRITE workspace ON promotionRequest TYPE record<workspace>;

    DEFINE FIELD OVERWRITE status ON promotionRequest TYPE "pending" | "approved" | "rejected" DEFAULT "pending";

    DEFINE FIELD OVERWRITE requestedAt ON promotionRequest TYPE datetime DEFAULT time::now() READONLY;

    DEFINE FIELD OVERWRITE reviewedBy ON promotionRequest TYPE option<record<user>>; 
    DEFINE FIELD OVERWRITE reviewedAt ON promotionRequest TYPE option<datetime>;
    DEFINE FIELD OVERWRITE rejectionReason ON promotionRequest TYPE option<string>;
