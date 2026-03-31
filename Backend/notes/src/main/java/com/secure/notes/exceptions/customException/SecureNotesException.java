package com.secure.notes.exceptions.customException;

public class SecureNotesException extends RuntimeException {
    public SecureNotesException(String message) {
        super(message);
    }

    public SecureNotesException(String message, Throwable cause) {
        super(message, cause);
    }
}