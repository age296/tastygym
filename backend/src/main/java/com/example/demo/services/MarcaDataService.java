package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;

import com.example.demo.dto.MarcaDataDto;
import com.example.demo.dto.MarcaTableDataDto;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.stereotype.Component;

@Component("marcaDataService") 
public class MarcaDataService {
    public List<MarcaDataDto> retrieveMarcaData() {

        List<MarcaDataDto> marcaData = new ArrayList<MarcaDataDto>();
        List<MarcaTableDataDto> marcaTableData;
        try {
            Document webPage = Jsoup.connect("https://www.marca.com/programacion-tv.html")
                    .get(); 
            List<Element> contentItem = webPage.getElementsByClass("schedule").get(0).getElementsByClass("content-item");
          

            for (Element row : contentItem) { 
                Element title = row.getElementsByClass("title-section-widget").get(0);
                Element day = title.getElementsByTag("strong").get(0);
                
                String dayOfWeek = day.text();
                String date = title.html();

                List<Element> dailysevent = row.getElementsByClass("dailyevent");
                marcaTableData = new ArrayList<MarcaTableDataDto>();
                
                for (Element dailyevent : dailysevent) { 
                    String dailyday = dailyevent.getElementsByClass("dailyday").get(0).text();
                    String dailycompetition = dailyevent.getElementsByClass("dailycompetition").get(0).text();
                    String dailyteams = dailyevent.getElementsByClass("dailyteams").get(0).getElementsByTag("a").get(0).text();
                    String dailyhour = dailyevent.getElementsByClass("dailyhour").get(0).text();
                    String dailychannel = dailyevent.getElementsByClass("dailychannel").get(0).text();
                    //String type, String hour, String competition, String name, String plataforma)
                    marcaTableData.add(new MarcaTableDataDto(dailyday, dailyhour, dailycompetition, dailyteams, dailychannel));
                }
                marcaData.add(new MarcaDataDto(marcaTableData, date, dayOfWeek));

            }
            return marcaData;

        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
