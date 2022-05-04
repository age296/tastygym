package com.example.demo.dto;

public class MarcaTableDataDto {
    public String type;
    public String hour; 
    public String competition; 
    public String name; 
    public String platform; 
    
    public MarcaTableDataDto(String type, String hour, String competition, String name, String platform) {
        this.type = type;
        this.hour = hour;
        this.competition = competition;
        this.name = name;
        this.platform = platform;
    }
    public MarcaTableDataDto() {

    }
    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }
    public String getHour() {
        return hour;
    }
    public void setHour(String hour) {
        this.hour = hour;
    }
    public String getCompetition() {
        return competition;
    }
    public void setCompetition(String competition) {
        this.competition = competition;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getPlatform() {
        return platform;
    }
    public void setPlataforma(String platform) {
        this.platform = platform;
    }
    
}
