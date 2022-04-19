import React from 'react';

import { BackIcon } from "../../components/icons/back-icon";
import { BackArrowWrapper, Header, HeaderLeftWrapper } from "../../components/top-header/header-components";
import { DetailsWrapper, FormRow, FormField, FormWrapper, UserImageWrapper } from "../details/details-components";
import { FlexedContainer, TabContentWrapper, TabsWrapper, Tab, TabContentHolder, FlexWrapper, CommonLabel, CommonText, LabelTextWrapper, ColLayout, TabContent } from "../../components/common-components/common-components";

import UserImage from '../../assets/images/img-1.jpg'

const userSummary = [
    {
        "name": "Lara",
        "weight": "60 Kgs",
        "tattoo_id": 123456,
        "city_tattoo_id": 123,
        "age": "1",
        "birth_date": "01-Jan-2021",
        "breed": "German Sheperd",
        "sex": "Female",
        "coat_color": "Black",
        "status": "Active",
        "on_treatment": "Yes",
        "problem": "No problems",
        "comments": "It is pretty good!",
        "medication": "Good food",
        "spl_instr": "Take special care",
        "spl_diet": "Milk",
        "active": "Yes",
        "rf_id": 123456,
        "microchild_no": 123,
        "avail_for_req": "Yes",
        "id": 123,
    }
]

const comments = [
    {
        date: "22-Nov-2021",
        comments: "Sunny(GS) is available to exhibit for students",
        name: "Kate Smith",
        role: "Teaching Technician"
    },
    {
        date: "21-Nov-2021",
        comments: "Students are allowed to view comments add this feature recently",
        name: "Joe Doe",
        role: "Admin"
    },
    {
        date: "21-Nov-2021",
        comments: "Gora(Horse) is recovering and available for teaching technician",
        name: "John Smith",
        role: "Animal Technician"
    },
    {
        date: "20-Nov-2021",
        comments: "Browny(Cat) prescriptions are completed. Requesting to send",
        name: "Kinsey Locke",
        role: "Animal Care Attended"
    }
]

export default function StudentViewComments() {

    const [activeTab, setActiveTab] = React.useState('summary');
    function tabChange(tabName) {
        setActiveTab(tabName);
    }

    return (
        <>

            <Header className="align-start">
                <BackArrowWrapper title="Go Back">
                    <BackIcon />
                </BackArrowWrapper>
                <HeaderLeftWrapper>
                    <DetailsWrapper>
                        <UserImageWrapper className="mr-2">
                            <img src={UserImage} alt="User" />
                        </UserImageWrapper>
                        <FlexedContainer>
                            <FlexWrapper className="four-child-layout mb-0">
                                {userSummary.map((data) =>
                                    <>
                                        <div className="flex-child">
                                            <ColLayout>
                                                <LabelTextWrapper>
                                                    <CommonLabel>Name</CommonLabel>
                                                    <CommonText>{data.name}</CommonText>
                                                </LabelTextWrapper>
                                                <LabelTextWrapper>
                                                    <CommonLabel>RFID</CommonLabel>
                                                    <CommonText>{data.rf_id}</CommonText>
                                                </LabelTextWrapper>
                                            </ColLayout>
                                        </div>
                                        <div className="flex-child">
                                            <ColLayout>
                                                <LabelTextWrapper>
                                                    <CommonLabel>Sex</CommonLabel>
                                                    <CommonText>{data.sex}</CommonText>
                                                </LabelTextWrapper>
                                                <LabelTextWrapper>
                                                    <CommonLabel>Age</CommonLabel>
                                                    <CommonText>{data.age}</CommonText>
                                                </LabelTextWrapper>
                                            </ColLayout>
                                        </div>
                                        <div className="flex-child">
                                            <ColLayout>
                                                <LabelTextWrapper>
                                                    <CommonLabel>Location</CommonLabel>
                                                    <CommonText>Wokingham</CommonText>
                                                </LabelTextWrapper>
                                                <LabelTextWrapper>
                                                    <CommonLabel>Status</CommonLabel>
                                                    <CommonText>{data.status}</CommonText>
                                                </LabelTextWrapper>
                                            </ColLayout>
                                        </div>
                                        <div className="flex-child">
                                            <ColLayout>
                                                <LabelTextWrapper>
                                                    <CommonLabel>Reminders</CommonLabel>
                                                    <CommonText>Hospital visit scheduled on Friday</CommonText>
                                                </LabelTextWrapper>
                                                <LabelTextWrapper>
                                                    <CommonLabel>On Treatment</CommonLabel>
                                                    <CommonText>{data.on_treatment}</CommonText>
                                                </LabelTextWrapper>
                                            </ColLayout>
                                        </div>
                                    </>
                                )}
                            </FlexWrapper>
                        </FlexedContainer>
                    </DetailsWrapper>
                </HeaderLeftWrapper>
            </Header>
            <FlexedContainer>
                <TabContentWrapper>
                    <TabsWrapper>
                        <Tab className={activeTab === 'summary' ? 'active' : ''} onClick={(e) => tabChange('summary')}>Summary</Tab>
                        <Tab className={activeTab === 'comments' ? 'active' : ''} onClick={(e) => tabChange('comments')}>Comments</Tab>
                        <Tab className={activeTab === 'reminders' ? 'active' : ''} onClick={(e) => tabChange('reminders')}>Reminders Alert</Tab>
                        <Tab className={activeTab === 'images' ? 'active' : ''} onClick={(e) => tabChange('images')}>Images</Tab>
                        <Tab className={activeTab === 'diagnosis' ? 'active' : ''} onClick={(e) => tabChange('diagnosis')}>Diagnosis Problems</Tab>
                        <Tab className={activeTab === 'disease_history' ? 'active' : ''} onClick={(e) => tabChange('disease_history')}>Disease History</Tab>
                        <Tab className={activeTab === 'vaccine_history' ? 'active' : ''} onClick={(e) => tabChange('vaccine_history')}>Vaccines History</Tab>
                        <Tab className={activeTab === 'wt_history' ? 'active' : ''} onClick={(e) => tabChange('wt_history')}>Weight History</Tab>
                    </TabsWrapper>
                    <TabContentHolder>
                        <TabContent>
                            {activeTab === 'summary' && <h2>Summary</h2>}
                            {activeTab === 'comments' &&
                                <>
                                    <FormWrapper>
                                        <FormRow>
                                            <FormField className="w-15">
                                                <CommonLabel className="mb-0">Date</CommonLabel>
                                            </FormField>
                                            <FormField className="flexed">
                                                <CommonLabel className="mb-0">Comments</CommonLabel>
                                            </FormField>
                                            <FormField className="w-15">
                                                <CommonLabel className="mb-0">Name</CommonLabel>
                                            </FormField>
                                            <FormField className="w-15">
                                                <CommonLabel className="mb-0">Role</CommonLabel>
                                            </FormField>
                                        </FormRow>
                                        {comments.map((comments_data, i) =>
                                            <FormRow key={i}>
                                                <FormField className="w-15">
                                                    <CommonText>{comments_data.date}</CommonText>
                                                </FormField>
                                                <FormField className="flexed">
                                                    <CommonText>{comments_data.comments}</CommonText>
                                                </FormField>
                                                <FormField className="w-15">
                                                    <CommonText>{comments_data.name}</CommonText>
                                                </FormField>
                                                <FormField className="w-15">
                                                    <CommonText>{comments_data.role}</CommonText>
                                                </FormField>
                                            </FormRow>
                                        )}
                                    </FormWrapper>
                                </>
                            }
                            {activeTab === 'reminders' && <h2>Reminders Alert</h2>}
                            {activeTab === 'images' && <h2>Images</h2>}
                            {activeTab === 'diagnosis' && <h2>Diagnosis Problems</h2>}
                            {activeTab === 'disease_history' && <h2>Disease History</h2>}
                            {activeTab === 'vaccine_history' && <h2>Vaccine History</h2>}
                            {activeTab === 'wt_history' && <h2>Weight History</h2>}
                        </TabContent>
                    </TabContentHolder>
                </TabContentWrapper>
            </FlexedContainer>
        </>
    )
}