import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'

import { BackIcon } from "../../components/icons/back-icon";
import { BackArrowWrapper, Header, HeaderLeftWrapper } from "../../components/top-header/header-components";
import { ButtonsWrapper, DetailsWrapper, FormRow, FormField, FormWrapper, UserImageWrapper } from "../details/details-components";
import { FlexedContainer, TabContentWrapper, TabsWrapper, Tab, TabContentHolder, FlexWrapper, CommonLabel, CommonText, LabelTextWrapper, ColLayout, TabContent, DialogWrapper, DialogContainer, DialogHeader, DialogTitle, CloseDialog, DialogContentWrapper, InputWrapper, InputContainer, TextArea } from "../../components/common-components/common-components";
import Button from "../../components/button/button";

import UserImage from '../../assets/images/img-1.jpg'
import CloseIcon from '../../assets/images/close.png';

export default function TeachingTech() {

    const [userSummary, setUserSummary] = useState([
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
    ])
    const [reqAnimal, showReqAnimal] = useState(false)

    const [activeTab, setActiveTab] = React.useState('summary');
    function tabChange(tabName) {
        setActiveTab(tabName);
    }

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    function reqAnimalDetails(anim_det) {
        console.log(anim_det)
        // setUserSummary(user_details)
        showReqAnimal(false)
        reset()
    }

    return (
        <>

            {reqAnimal &&
                <DialogWrapper>
                    <DialogContainer>
                        <DialogHeader>
                            <DialogTitle>Request Animal</DialogTitle>
                            <CloseDialog onClick={() => showReqAnimal(false)}>
                                <img src={CloseIcon} alt="Close Dialog" />
                            </CloseDialog>
                        </DialogHeader>
                        <DialogContentWrapper className="form-wrapper">
                            <form onSubmit={handleSubmit(reqAnimalDetails)}>
                                <div className="form-content">
                                    <InputWrapper>
                                        <CommonLabel>Animal Name</CommonLabel>
                                        <InputContainer placeholder="Enter Animal Name" name="anim_name" {...register("anim_name")} />
                                    </InputWrapper>
                                    <InputWrapper>
                                        <CommonLabel>Animal Kind</CommonLabel>
                                        <InputContainer placeholder="Enter Animal Kind" name="anim_kind" {...register("anim_kind")} />
                                    </InputWrapper>
                                    <InputWrapper>
                                        <CommonLabel>RFID</CommonLabel>
                                        <InputContainer placeholder="Enter RFID" name="rfid" {...register("anim_rfid")} />
                                    </InputWrapper>
                                    <InputWrapper>
                                        <CommonLabel>Date</CommonLabel>
                                        <InputContainer type="date" placeholder="Enter Date" name="date" {...register("date")} />
                                    </InputWrapper>
                                </div>
                                <div className="form-footer">
                                    <Button type="submit" primary>Request</Button>
                                </div>
                            </form>
                        </DialogContentWrapper>
                    </DialogContainer>
                </DialogWrapper>
            }

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
                            {activeTab === 'summary' &&
                                <>
                                    <ButtonsWrapper>
                                        <div></div>
                                        <div>
                                            <Button primary onClick={() => showReqAnimal(true)}>Request Animal</Button>
                                        </div>
                                    </ButtonsWrapper>
                                    <FormWrapper>
                                        {userSummary.map((data) =>
                                            <>
                                                <FormRow>
                                                    <FormField className="w-20">
                                                        <CommonLabel>Name</CommonLabel>
                                                    </FormField>
                                                    <FormField className="flexed">
                                                        <CommonText>{data.name}</CommonText>
                                                    </FormField>
                                                </FormRow>
                                                <FormRow>
                                                    <FormField className="w-20">
                                                        <CommonLabel>Weight</CommonLabel>
                                                    </FormField>
                                                    <FormField className="flexed">
                                                        <CommonText>{data.weight}</CommonText>
                                                    </FormField>
                                                </FormRow>
                                                <FormRow>
                                                    <FormField className="w-20">
                                                        <CommonLabel>Tattoo #</CommonLabel>
                                                    </FormField>
                                                    <FormField className="flexed">
                                                        <CommonText>{data.tattoo_id}</CommonText>
                                                    </FormField>
                                                </FormRow>
                                                <FormRow>
                                                    <FormField className="w-20">
                                                        <CommonLabel>City Tattoo #</CommonLabel>
                                                    </FormField>
                                                    <FormField className="flexed">
                                                        <CommonText>{data.city_tattoo_id}</CommonText>
                                                    </FormField>
                                                </FormRow>
                                                <FormRow>
                                                    <FormField className="w-20">
                                                        <CommonLabel>Age</CommonLabel>
                                                    </FormField>
                                                    <FormField className="flexed">
                                                        <CommonText>{data.age}</CommonText>
                                                    </FormField>
                                                </FormRow>
                                                <FormRow>
                                                    <FormField className="w-20">
                                                        <CommonLabel>Birth Date</CommonLabel>
                                                    </FormField>
                                                    <FormField className="flexed">
                                                        <CommonText>{data.birth_date}</CommonText>
                                                    </FormField>
                                                </FormRow>
                                                <FormRow>
                                                    <FormField className="w-20">
                                                        <CommonLabel>Breed</CommonLabel>
                                                    </FormField>
                                                    <FormField className="flexed">
                                                        <CommonText>{data.breed}</CommonText>
                                                    </FormField>
                                                </FormRow>
                                                <FormRow>
                                                    <FormField className="w-20">
                                                        <CommonLabel>Sex</CommonLabel>
                                                    </FormField>
                                                    <FormField className="flexed">
                                                        <CommonText>{data.sex}</CommonText>
                                                    </FormField>
                                                </FormRow>
                                                <FormRow>
                                                    <FormField className="w-20">
                                                        <CommonLabel>Coat Color</CommonLabel>
                                                    </FormField>
                                                    <FormField className="flexed">
                                                        <CommonText>{data.coat_color}</CommonText>
                                                    </FormField>
                                                </FormRow>
                                                <FormRow>
                                                    <FormField className="w-20">
                                                        <CommonLabel>Status</CommonLabel>
                                                    </FormField>
                                                    <FormField className="flexed">
                                                        <CommonText>{data.status}</CommonText>
                                                    </FormField>
                                                </FormRow>
                                                <FormRow>
                                                    <FormField className="w-20">
                                                        <CommonLabel>On Treatment</CommonLabel>
                                                    </FormField>
                                                    <FormField className="flexed">
                                                        <CommonText>{data.on_treatment}</CommonText>
                                                    </FormField>
                                                </FormRow>
                                                <FormRow>
                                                    <FormField className="w-20">
                                                        <CommonLabel>Problem</CommonLabel>
                                                    </FormField>
                                                    <FormField className="flexed">
                                                        <CommonText>{data.problem}</CommonText>
                                                    </FormField>
                                                </FormRow>
                                                <FormRow>
                                                    <FormField className="w-20">
                                                        <CommonLabel>Comments</CommonLabel>
                                                    </FormField>
                                                    <FormField className="flexed">
                                                        <CommonText>{data.comments}</CommonText>
                                                    </FormField>
                                                </FormRow>
                                                <FormRow>
                                                    <FormField className="w-20">
                                                        <CommonLabel>Continuous Medication</CommonLabel>
                                                    </FormField>
                                                    <FormField className="flexed">
                                                        <CommonText>{data.medication}</CommonText>
                                                    </FormField>
                                                </FormRow>
                                                <FormRow>
                                                    <FormField className="w-20">
                                                        <CommonLabel>Special Instructions</CommonLabel>
                                                    </FormField>
                                                    <FormField className="flexed">
                                                        <CommonText>{data.spl_instr}</CommonText>
                                                    </FormField>
                                                </FormRow>
                                                <FormRow>
                                                    <FormField className="w-20">
                                                        <CommonLabel>Special Diet</CommonLabel>
                                                    </FormField>
                                                    <FormField className="flexed">
                                                        <CommonText>{data.spl_diet}</CommonText>
                                                    </FormField>
                                                </FormRow>
                                                <FormRow>
                                                    <FormField className="w-20">
                                                        <CommonLabel>Active</CommonLabel>
                                                    </FormField>
                                                    <FormField className="flexed">
                                                        <CommonText>{data.active}</CommonText>
                                                    </FormField>
                                                </FormRow>
                                                <FormRow>
                                                    <FormField className="w-20">
                                                        <CommonLabel>RFID #</CommonLabel>
                                                    </FormField>
                                                    <FormField className="flexed">
                                                        <CommonText>{data.rf_id}</CommonText>
                                                    </FormField>
                                                </FormRow>
                                                <FormRow>
                                                    <FormField className="w-20">
                                                        <CommonLabel>Microchip #</CommonLabel>
                                                    </FormField>
                                                    <FormField className="flexed">
                                                        <CommonText>{data.microchild_no}</CommonText>
                                                    </FormField>
                                                </FormRow>
                                                <FormRow>
                                                    <FormField className="w-20">
                                                        <CommonLabel>Available for Request</CommonLabel>
                                                    </FormField>
                                                    <FormField className="flexed">
                                                        <CommonText>{data.avail_for_req}</CommonText>
                                                    </FormField>
                                                </FormRow>
                                                <FormRow>
                                                    <FormField className="w-20">
                                                        <CommonLabel>ID</CommonLabel>
                                                    </FormField>
                                                    <FormField className="flexed">
                                                        <CommonText>{data.id}</CommonText>
                                                    </FormField>
                                                </FormRow>
                                            </>
                                        )}
                                    </FormWrapper>
                                </>
                            }
                            {activeTab === 'comments' && <h2>Comments</h2>}
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