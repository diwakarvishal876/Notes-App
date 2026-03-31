package com.secure.notes.exceptions.customException;

public class Invalid2FACodeException extends RuntimeException {
    public Invalid2FACodeException(String message) {
        super(message);
    }
}