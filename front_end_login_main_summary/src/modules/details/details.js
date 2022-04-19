import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { Global } from '../../axios';
import {useLocation} from "react-router-dom";
import { BackIcon } from "../../components/icons/back-icon";
import { BackArrowWrapper, Header, HeaderLeftWrapper } from "../../components/top-header/header-components";
import { ButtonsWrapper, DetailsWrapper, FormRow, FormField, FormWrapper, ImageDetailsWrapper, ImageWrapper, UserImageWrapper, CommentsWrapper, DeleteAction, DefaultContainer } from "./details-components";
import { FlexedContainer, TabContentWrapper, TabsWrapper, Tab, TabContentHolder, FlexWrapper, CommonLabel, CommonText, LabelTextWrapper, ColLayout, TabContent, FlexLayout, DialogWrapper, DialogContainer, DialogHeader, DialogTitle, CloseDialog, DialogContentWrapper, InputWrapper, InputContainer, TextArea } from "../../components/common-components/common-components";
import Button from "../../components/button/button";

import UserImage from '../../assets/images/img-1.jpg'
import Image from '../../assets/images/img-2.jpg'
import CloseIcon from '../../assets/images/close.png';
import deleteIcon from '../../assets/images/delete.png'

import Dog from '../../assets/images/GermanShepard.png'
import Horse from '../../assets/images/horse.png'
import Cow from '../../assets/images/cow.jpeg'

export default function Details(props) {
    const imagesData = [
        // {
        //     id: "1",
        //     imgSrc: `${Dog}`,
        // },
        // {
        //     id: "2",
        //     imgSrc: `${Horse}`,
        //     addedBy: 'Hope',
        //     addedOn: '29-Nov-2021'
        // },
        // {
        //     id: "3",
        //     imgSrc: `${Cow}`,
        //     addedBy: 'Kinsey',
        //     addedOn: '29-Nov-2021'
        // }

    ];
    const [imagesList, updateImagesList] = useState(imagesData)
//---------------------------------------------------------------------------------// 


    const [userSummary, setUserSummary] = useState([
        {
            name: "",
            weight: "",
            tattoo_id: 123456,
            city_tattoo_id: 123,
            age: "1",
            birth_date: "01-Jan-2021",
            breed: "",
            sex: "",
            coat_color: "Black",
            status: "",
            on_treatment: "Yes",
            problem: "No problems",
            comments: "It is pretty good!",
            medication: "Good food",
            spl_instr: "Take special care",
            spl_diet: "Milk",
            active: "Yes",
            rf_id: 123456,
            microchild_no: 123,
            avail_for_req: "Yes",
            id: 123,
            image: ""
        }
    ]);

    const search = useLocation().search;
    const id = new URLSearchParams(search).get('id');
    console.log(id);

    useEffect(async () => {
        //FETCH animal summary info
        var response = await fetch(`http://localhost:8080/animals/${id}`);
        var json = await response.json();
        console.log(json);
        // userSummary and merge json
        //console.log(window.location.href);
        var tmp = [{
            name: json.animalName,
            weight:json.weight,
            tattoo_id: 123456,
            city_tattoo_id: json.cityTattoo,
            age: "1",
            birth_date: "01-Jan-2021",
            breed: json.breed,
            sex: json.sex,
            coat_color: "Black",
            status: json.animalAvailability,
            on_treatment: "Yes",
            problem: "No problems",
            comments: "It is pretty good!",
            medication: "Good food",
            spl_instr: "Take special care",
            spl_diet: "Milk",
            active: "Yes",
            rf_id: json.rfid,
            microchild_no: 123,
            avail_for_req: "Yes",
            id: json.animalId,
            image: json.fileURL
        }];
        setUserSummary(tmp);
        //FETCH images for specific animal 
        response = await fetch(`http://localhost:8080/animals/images/${id}`);
        json = await response.json();
        console.log(json);
        json = json.map(img =>{
            return {
                id:img.imageId,
                imgSrc:img.fileURL,
                addedBy:img.username, 
                addedOn:img.date 
            };
        });
        updateImagesList(json);

//----------------------------------------------------------------------------------------------
        //FETCH comments for specific animal
        response = await fetch(`http://localhost:8080/animals/comments/${id}`);
        json = await response.json();
        json = json.map((com)=>{
            return {
                comments:com.comment,
                name:com.username,
                role:com.userRole,
                date: com.date
            };
        });
        setNewComments(json);


    }, {});

    const [comments, setNewComments] = useState([
        // {
        //     date: "22-Nov-2021",
        //     comments: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        //     name: "Davina Claire",
        //     role: "Developer"
        // },
        // {
        //     date: "21-Nov-2021",
        //     comments: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        //     name: "Hope Mikaelson",
        //     role: "Developer"
        // },
        // {
        //     date: "21-Nov-2021",
        //     comments: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        //     name: "Clarke Griffin",
        //     role: "Developer"
        // },
        // {
        //     date: "20-Nov-2021",
        //     comments: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        //     name: "Kinsey Locke",
        //     role: "Developer"
        // }
    ])



    const handleRemoveImgData = (id) => {
        updateImagesList(imagesList.filter(item => item.id !== id));
    };

    const [activeTab, setActiveTab] = React.useState('summary');
    function tabChange(tabName) {
        setActiveTab(tabName);
    }

    const [editUserSummary, showEditUserSummary] = useState(false)
    const [addComments, showAddComments] = useState(false)
    const [editComments, showEditComments] = useState(false)
    const [addImage, showAddImage] = useState(false)

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    function onSubmit(user_details) {
        console.log(user_details)
        // setUserSummary(user_details)
        showEditUserSummary(false)
        reset()
    }

    function addNewComment(newCommentDetails) {
        let newComments = [...comments]
        newComments.unshift(newCommentDetails)
        setNewComments(newComments)
        showAddComments(false);
        reset()
    }

    function updateComments() {
        showEditComments(false);
        reset()
    }

    function addNewImage(img_details) {
        let addedImages = [...imagesData]
        addedImages.unshift(img_details)
        updateImagesList(addedImages)
        showAddImage(false);
        reset();
    }

    // useEffect(() => {
    //     Global.GetSummaryDetails().then((response) => {
    //         let result = response.data
    //         console.log(response)
    //         if (result.success) {
    //             console.log(response)
    //         }
    //     })
    // }, []);

    return (
        <>

            {editUserSummary &&
                <DialogWrapper>
                    <DialogContainer>
                        <DialogHeader>
                            <DialogTitle>Edit Animal Summary</DialogTitle>
                            <CloseDialog onClick={() => showEditUserSummary(false)}>
                                <img src={CloseIcon} alt="Close Dialog" />
                            </CloseDialog>
                        </DialogHeader>
                        <DialogContentWrapper className="form-wrapper">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-content">
                                    {userSummary.map((user_data) =>
                                        <FlexWrapper className="two-child-layout">
                                            <InputWrapper className="flex-child">
                                                <CommonLabel>Name</CommonLabel>
                                                <InputContainer
                                                    defaultValue={user_data.name}
                                                    name="name"
                                                    {...register('name')}
                                                />
                                            </InputWrapper>
                                            <InputWrapper className="flex-child">
                                                <CommonLabel>Weight</CommonLabel>
                                                <InputContainer
                                                    defaultValue={user_data.weight}
                                                    name="weight"
                                                    {...register('weight')} />
                                            </InputWrapper>
                                            <InputWrapper className="flex-child">
                                                <CommonLabel>Tattoo #</CommonLabel>
                                                <InputContainer
                                                    defaultValue={user_data.tattoo_id}
                                                    name="tatoo"
                                                    {...register('tattoo')}
                                                />
                                            </InputWrapper>
                                            <InputWrapper className="flex-child">
                                                <CommonLabel>City Tattoo #</CommonLabel>
                                                <InputContainer
                                                    defaultValue={user_data.city_tattoo_id}
                                                    name="city_tatoo"
                                                    {...register('city_tatoo')}
                                                />
                                            </InputWrapper>
                                            <InputWrapper className="flex-child">
                                                <CommonLabel>Age</CommonLabel>
                                                <InputContainer
                                                    defaultValue={user_data.age}
                                                    name="age"
                                                    {...register('age')}
                                                />
                                            </InputWrapper>
                                            <InputWrapper className="flex-child">
                                                <CommonLabel>Birth Date</CommonLabel>
                                                <InputContainer
                                                    defaultValue={user_data.birth_date}
                                                    name="birthDate"
                                                    {...register('birthDate')}
                                                />
                                            </InputWrapper>
                                            <InputWrapper className="flex-child">
                                                <CommonLabel>Breed</CommonLabel>
                                                <InputContainer
                                                    defaultValue={user_data.breed}
                                                    name="breed"
                                                    {...register('breed')}
                                                />
                                            </InputWrapper>
                                            <InputWrapper className="flex-child">
                                                <CommonLabel>Sex</CommonLabel>
                                                <InputContainer
                                                    defaultValue={user_data.sex}
                                                    name="sex"
                                                    {...register('sex')}
                                                />
                                            </InputWrapper>
                                            <InputWrapper className="flex-child">
                                                <CommonLabel>Coat Color</CommonLabel>
                                                <InputContainer
                                                    defaultValue={user_data.coat_color}
                                                    name="coatColor"
                                                    {...register('coatColor')}
                                                />
                                            </InputWrapper>
                                            <InputWrapper className="flex-child">
                                                <CommonLabel>Status</CommonLabel>
                                                <InputContainer
                                                    defaultValue={user_data.status}
                                                    name="status"
                                                    {...register('status')}
                                                />
                                            </InputWrapper>
                                            <InputWrapper className="flex-child">
                                                <CommonLabel>On Treatment</CommonLabel>
                                                <InputContainer
                                                    defaultValue={user_data.on_treatment}
                                                    name="treatment"
                                                    {...register('treatment')}
                                                />
                                            </InputWrapper>
                                            <InputWrapper className="flex-child">
                                                <CommonLabel>Problem</CommonLabel>
                                                <InputContainer
                                                    defaultValue={user_data.problem}
                                                    name="problem"
                                                    {...register('problem')}
                                                />
                                            </InputWrapper>
                                            <InputWrapper className="flex-child">
                                                <CommonLabel>Comments</CommonLabel>
                                                <InputContainer
                                                    defaultValue={user_data.comments}
                                                    name="comments"
                                                    {...register('comments')}
                                                />
                                            </InputWrapper>
                                            <InputWrapper className="flex-child">
                                                <CommonLabel>Continuous Medication</CommonLabel>
                                                <InputContainer
                                                    defaultValue={user_data.medication}
                                                    name="medication"
                                                    {...register('medication')}
                                                />
                                            </InputWrapper>
                                            <InputWrapper className="flex-child">
                                                <CommonLabel>Special Instructions</CommonLabel>
                                                <InputContainer
                                                    defaultValue={user_data.spl_instr}
                                                    name="instructions"
                                                    {...register('instructions')}
                                                />
                                            </InputWrapper>
                                            <InputWrapper className="flex-child">
                                                <CommonLabel>Special Diet</CommonLabel>
                                                <InputContainer
                                                    defaultValue={user_data.spl_diet}
                                                    name="diet"
                                                    {...register('diet')}
                                                />
                                            </InputWrapper>
                                            <InputWrapper className="flex-child">
                                                <CommonLabel>Active</CommonLabel>
                                                <InputContainer
                                                    defaultValue={user_data.active}
                                                    name="active"
                                                    {...register('active')}
                                                />
                                            </InputWrapper>
                                            <InputWrapper className="flex-child">
                                                <CommonLabel>RFID</CommonLabel>
                                                <InputContainer
                                                    defaultValue={user_data.rf_id}
                                                    name="rfid"
                                                    {...register('rfid')}
                                                />
                                            </InputWrapper>
                                            <InputWrapper className="flex-child">
                                                <CommonLabel>Microchip #</CommonLabel>
                                                <InputContainer
                                                    defaultValue={user_data.microchild_no}
                                                    name="chip#"
                                                    {...register('chip#')}
                                                />
                                            </InputWrapper>
                                            <InputWrapper className="flex-child">
                                                <CommonLabel>Available for Request</CommonLabel>
                                                <InputContainer
                                                    defaultValue={user_data.avail_for_req}
                                                    name="req"
                                                    {...register('req')}
                                                />
                                            </InputWrapper>
                                            <InputWrapper className="flex-child">
                                                <CommonLabel>ID</CommonLabel>
                                                <InputContainer
                                                    defaultValue={user_data.id}
                                                    name="id"
                                                    {...register('id')}
                                                />
                                            </InputWrapper>
                                        </FlexWrapper>
                                    )}
                                </div>
                                <div className="form-footer">
                                    <Button type="submit" primary>Save changes</Button>
                                </div>
                            </form>
                        </DialogContentWrapper>
                    </DialogContainer>
                </DialogWrapper>
            }

            {addComments &&
                <DialogWrapper>
                    <DialogContainer>
                        <DialogHeader>
                            <DialogTitle>Add Comments</DialogTitle>
                            <CloseDialog onClick={() => showAddComments(false)}>
                                <img src={CloseIcon} alt="Close Dialog" />
                            </CloseDialog>
                        </DialogHeader>
                        <DialogContentWrapper className="form-wrapper">
                            <form onSubmit={handleSubmit(addNewComment)}>
                                <div className="form-content">
                                    <InputWrapper>
                                        <CommonLabel>Date</CommonLabel>
                                        <InputContainer type="date" placeholder="Enter Date" name="date" {...register("date")} />
                                    </InputWrapper>
                                    <InputWrapper>
                                        <CommonLabel>Comments</CommonLabel>
                                        <TextArea placeholder="Add Comments here..." name="comments" rows={4} {...register("comments")} />
                                    </InputWrapper>
                                    <InputWrapper>
                                        <CommonLabel>Added by</CommonLabel>
                                        <InputContainer placeholder="Enter User Name" name="name" {...register("name")} />
                                    </InputWrapper>
                                    <InputWrapper>
                                        <CommonLabel>Role</CommonLabel>
                                        <InputContainer placeholder="Enter User Role" name="role" {...register("role")} />
                                    </InputWrapper>
                                </div>
                                <div className="form-footer">
                                    <Button type="submit" primary>Save Changes</Button>
                                </div>
                            </form>
                        </DialogContentWrapper>
                    </DialogContainer>
                </DialogWrapper>
            }

            {editComments &&
                <DialogWrapper>
                    <DialogContainer>
                        <DialogHeader>
                            <DialogTitle>Edit Comments</DialogTitle>
                            <CloseDialog onClick={() => showEditComments(false)}>
                                <img src={CloseIcon} alt="Close Dialog" />
                            </CloseDialog>
                        </DialogHeader>
                        <DialogContentWrapper className="form-wrapper">
                            <form onSubmit={handleSubmit(updateComments)}>
                                <div className="form-content">
                                    {comments.map((comments, i) =>
                                        <CommentsWrapper key={i}>
                                            <InputWrapper>
                                                <CommonLabel>Date</CommonLabel>
                                                <InputContainer value={comments.date} name="date" {...register("date")} />
                                            </InputWrapper>
                                            <InputWrapper>
                                                <CommonLabel>Comments</CommonLabel>
                                                <TextArea value={comments.comments} name="comment" rows={4} {...register("comment")} />
                                            </InputWrapper>
                                            <InputWrapper>
                                                <CommonLabel>Added by</CommonLabel>
                                                <InputContainer value={comments.name} name="addedBy" {...register("addedBy")} />
                                            </InputWrapper>
                                            <InputWrapper>
                                                <CommonLabel>Role</CommonLabel>
                                                <InputContainer value={comments.role} name="role" {...register("role")} />
                                            </InputWrapper>
                                        </CommentsWrapper>
                                    )}
                                </div>
                                <div className="form-footer">
                                    <Button type="submit" primary>Save Changes</Button>
                                </div>
                            </form>
                        </DialogContentWrapper>
                    </DialogContainer>
                </DialogWrapper>
            }

            {addImage &&
                <DialogWrapper>
                    <DialogContainer>
                        <DialogHeader>
                            <DialogTitle>Add Image</DialogTitle>
                            <CloseDialog onClick={() => showAddImage(false)}>
                                <img src={CloseIcon} alt="Close Dialog" />
                            </CloseDialog>
                        </DialogHeader>
                        <DialogContentWrapper className="form-wrapper">
                            <form onSubmit={handleSubmit(addNewImage)}>
                                <div className="form-content">
                                    <InputWrapper>
                                        <CommonLabel>Added by</CommonLabel>
                                        <InputContainer placeholder="Enter User Name" name="addedBy" {...register("addedBy")} />
                                    </InputWrapper>
                                    <InputWrapper>
                                        <CommonLabel>Date</CommonLabel>
                                        <InputContainer type="date" placeholder="Enter Date" name="addedOn" {...register("addedOn")} />
                                    </InputWrapper>
                                </div>
                                <div className="form-footer">
                                    <Button type="submit" primary>Save Changes</Button>
                                </div>
                            </form>
                        </DialogContentWrapper>
                    </DialogContainer>
                </DialogWrapper>
            }

            <Header className="align-start">
                <a href="/home">
                <BackArrowWrapper title="Go Back">
                    <BackIcon />
                </BackArrowWrapper>
                </a>
                <HeaderLeftWrapper>
                    <DetailsWrapper>
                        <UserImageWrapper className="mr-2">
                            <img src={userSummary[0].image} alt="User" />
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
                                            <Button primary onClick={() => showEditUserSummary(true)}>Edit</Button>
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
                            {activeTab === 'comments' &&
                                <>
                                    {comments.length > 0 &&
                                        <ButtonsWrapper>
                                            <div></div>
                                            <div>
                                                <Button primary onClick={() => showAddComments(true)}>Add Comment(s)</Button>
                                                <Button primary onClick={() => showEditComments(true)}>Edit Comment(s)</Button>
                                                {/* <Button primary>Delete Comment(s)</Button> */}
                                            </div>
                                        </ButtonsWrapper>
                                    }
                                    <FormWrapper>
                                        <FormRow>
                                            <FormField className="w-20">
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
                                            {/* <FormField className="w-5">
                                                <DeleteAction className="no-position">
                                                    <img src={deleteIcon} alt="Delete" />
                                                </DeleteAction> */}
                                            {/* </FormField> */}
                                        </FormRow>
                                        {comments.map((comments_data, i) =>
                                            <FormRow key={i}>
                                                <FormField className="w-20">
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
                                        {comments.length === 0 &&
                                            <DefaultContainer>
                                                <Button primary onClick={() => showAddComments(true)}>Add Comment</Button>
                                                className                  </DefaultContainer>
                                        }
                                    </FormWrapper>
                                </>
                            }
                            {activeTab === 'reminders' && <h2>Reminders Alert</h2>}
                            {activeTab === 'images' &&
                                <>
                                    <ButtonsWrapper>
                                        <div></div>
                                        <div>
                                            <Button primary onClick={() => showAddImage(true)}>Add Image(s)</Button>
                                            <Button primary>Modify Image(s)</Button>
                                        </div>
                                    </ButtonsWrapper>
                                    <FlexWrapper className="four-child-layout">
                                        {imagesList.map((img_data, i) =>
                                            <div className="flex-child" key={i}>
                                                <ImageDetailsWrapper>
                                                    <DeleteAction onClick={(e) => handleRemoveImgData(img_data.id)}>
                                                        <img src={deleteIcon} alt="Delete" />
                                                    </DeleteAction>
                                                    <ImageWrapper>
                                                        <img src={img_data.imgSrc} alt="vet-project" />
                                                    </ImageWrapper>
                                                    <FlexLayout className="mb-4px">
                                                        <CommonLabel className="mr-1 mb-0">Added by:</CommonLabel>
                                                        <CommonText>{img_data.addedBy}</CommonText>
                                                    </FlexLayout>
                                                    <FlexLayout>
                                                        <CommonLabel className="mr-1 mb-0">Date:</CommonLabel>
                                                        <CommonText>{img_data.addedOn}</CommonText>
                                                    </FlexLayout>
                                                </ImageDetailsWrapper>
                                            </div>
                                        )}
                                    </FlexWrapper>
                                </>
                            }
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