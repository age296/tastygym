package com.example.demo.dto;

import java.util.List;

public class MarcaDataDto {
    List<MarcaTableDataDto> data;
    String date;
    String day;
    public MarcaDataDto() {
    }
    public MarcaDataDto(List<MarcaTableDataDto> data, String date, String day) {
        this.data = data;
        this.date = date;
        this.day = day;
    }
    public List<MarcaTableDataDto> getData() {
        return data;
    }
    public void setData(List<MarcaTableDataDto> data) {
        this.data = data;
    }
    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }
    public String getDay() {
        return day;
    }
    public void setDay(String day) {
        this.day = day;
    }
    
}
