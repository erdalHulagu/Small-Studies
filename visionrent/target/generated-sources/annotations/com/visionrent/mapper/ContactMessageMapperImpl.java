package com.visionrent.mapper;

import com.visionrent.domain.ContactMessage;
import com.visionrent.dto.ContactMessageDTO;
import com.visionrent.dto.request.ContactMessageRequest;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-02T19:57:41+0300",
    comments = "version: 1.5.2.Final, compiler: Eclipse JDT (IDE) 1.4.200.v20220802-0458, environment: Java 17.0.4.1 (Eclipse Adoptium)"
)
@Component
public class ContactMessageMapperImpl implements ContactMessageMapper {

    @Override
    public ContactMessageDTO contactMessageToDTO(ContactMessage contactMessage) {
        if ( contactMessage == null ) {
            return null;
        }

        ContactMessageDTO contactMessageDTO = new ContactMessageDTO();

        contactMessageDTO.setBody( contactMessage.getBody() );
        contactMessageDTO.setEmail( contactMessage.getEmail() );
        contactMessageDTO.setId( contactMessage.getId() );
        contactMessageDTO.setName( contactMessage.getName() );
        contactMessageDTO.setSubject( contactMessage.getSubject() );

        return contactMessageDTO;
    }

    @Override
    public ContactMessage contactMessageRequestToContactMessage(ContactMessageRequest contactMessageRequest) {
        if ( contactMessageRequest == null ) {
            return null;
        }

        ContactMessage contactMessage = new ContactMessage();

        contactMessage.setBody( contactMessageRequest.getBody() );
        contactMessage.setEmail( contactMessageRequest.getEmail() );
        contactMessage.setName( contactMessageRequest.getName() );
        contactMessage.setSubject( contactMessageRequest.getSubject() );

        return contactMessage;
    }

    @Override
    public List<ContactMessageDTO> map(List<ContactMessage> contactMessageList) {
        if ( contactMessageList == null ) {
            return null;
        }

        List<ContactMessageDTO> list = new ArrayList<ContactMessageDTO>( contactMessageList.size() );
        for ( ContactMessage contactMessage : contactMessageList ) {
            list.add( contactMessageToDTO( contactMessage ) );
        }

        return list;
    }
}
