DEFINE TABLE OVERWRITE user SCHEMAFULL
    PERMISSIONS
        FOR select WHERE id = $auth OR id IN $auth->memberOf.out<-memberOf.in
        FOR create NONE
        FOR update WHERE id = $auth
        FOR delete WHERE id = $auth; 

    DEFINE FIELD OVERWRITE username ON user TYPE string VALUE string::lowercase($value) ASSERT string::len($value) > 1;
    DEFINE FIELD OVERWRITE email ON user TYPE string VALUE string::lowercase($value) ASSERT string::is_email($value) 
        PERMISSIONS
            FOR select, update WHERE id = $auth;
            
    DEFINE FIELD OVERWRITE passwordHash ON user TYPE string
        PERMISSIONS
            FOR select NONE
            FOR update WHERE id = $auth;

    DEFINE FIELD OVERWRITE avatarUrl ON user TYPE option<string | null>;
    DEFINE FIELD OVERWRITE createdAt ON user TYPE datetime DEFAULT time::now() READONLY;
    DEFINE FIELD OVERWRITE updatedAt ON user TYPE datetime VALUE time::now();

DEFINE INDEX OVERWRITE user_email_idx ON user FIELDS email UNIQUE;
DEFINE INDEX OVERWRITE user_username_idx ON user FIELDS username UNIQUE;
