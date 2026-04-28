package com.rapidresponse.crisis;

import java.time.LocalDateTime;

class CrisisReportRequest {
    private Long userId;
    private String crisisType;
    private String description;
    private double sourceLat;
    private double sourceLng;
    private double destinationLat;
    private double destinationLng;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getCrisisType() {
        return crisisType;
    }

    public void setCrisisType(String crisisType) {
        this.crisisType = crisisType;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getSourceLat() {
        return sourceLat;
    }

    public void setSourceLat(double sourceLat) {
        this.sourceLat = sourceLat;
    }

    public double getSourceLng() {
        return sourceLng;
    }

    public void setSourceLng(double sourceLng) {
        this.sourceLng = sourceLng;
    }

    public double getDestinationLat() {
        return destinationLat;
    }

    public void setDestinationLat(double destinationLat) {
        this.destinationLat = destinationLat;
    }

    public double getDestinationLng() {
        return destinationLng;
    }

    public void setDestinationLng(double destinationLng) {
        this.destinationLng = destinationLng;
    }
}

class CrisisReportResponse {
    private final Long id;
    private final String crisisType;
    private final String description;
    private final double sourceLat;
    private final double sourceLng;
    private final double destinationLat;
    private final double destinationLng;
    private final double distanceKm;
    private final LocalDateTime createdAt;

    CrisisReportResponse(
            Long id,
            String crisisType,
            String description,
            double sourceLat,
            double sourceLng,
            double destinationLat,
            double destinationLng,
            double distanceKm,
            LocalDateTime createdAt) {
        this.id = id;
        this.crisisType = crisisType;
        this.description = description;
        this.sourceLat = sourceLat;
        this.sourceLng = sourceLng;
        this.destinationLat = destinationLat;
        this.destinationLng = destinationLng;
        this.distanceKm = distanceKm;
        this.createdAt = createdAt;
    }

    static CrisisReportResponse from(CrisisReport report) {
        return new CrisisReportResponse(
                report.getId(),
                report.getCrisisType(),
                report.getDescription(),
                report.getSourceLat(),
                report.getSourceLng(),
                report.getDestinationLat(),
                report.getDestinationLng(),
                report.getDistanceKm(),
                report.getCreatedAt());
    }

    public Long getId() {
        return id;
    }

    public String getCrisisType() {
        return crisisType;
    }

    public String getDescription() {
        return description;
    }

    public double getSourceLat() {
        return sourceLat;
    }

    public double getSourceLng() {
        return sourceLng;
    }

    public double getDestinationLat() {
        return destinationLat;
    }

    public double getDestinationLng() {
        return destinationLng;
    }

    public double getDistanceKm() {
        return distanceKm;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
}
