DEFINE ACCESS OVERWRITE account ON DATABASE TYPE RECORD
    SIGNUP (
        CREATE user CONTENT {
            username: $username,
            email: $email,
            passwordHash: crypto::argon2::generate($password)
        }
    )
    SIGNIN (
        SELECT * FROM user
        WHERE email = string::lowercase($email)
        AND crypto::argon2::compare(passwordHash, $password)
    )
    DURATION FOR TOKEN 7d, FOR SESSION 7d;