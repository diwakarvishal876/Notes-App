package com.secure.notes.exceptions.customException;

public class OAuth2EmailNotFoundException extends RuntimeException {
    public OAuth2EmailNotFoundException(String message) {
        super(message);
    }
}
