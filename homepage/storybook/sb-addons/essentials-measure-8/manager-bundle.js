try{(()=>{var o=__REACT__,{Children:n,Component:e,Fragment:c,Profiler:t,PureComponent:r,StrictMode:I,Suspense:a,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:l,cloneElement:i,createContext:s,createElement:u,createFactory:d,createRef:m,forwardRef:S,isValidElement:p,lazy:C,memo:h,startTransition:b,unstable_act:T,useCallback:_,useContext:A,useDebugValue:g,useDeferredValue:y,useEffect:k,useId:B,useImperativeHandle:O,useInsertionEffect:R,useLayoutEffect:P,useMemo:L,useReducer:E,useRef:f,useState:w,useSyncExternalStore:D,useTransition:M,version:v}=__REACT__,{ActiveTabs:H,Consumer:U,ManagerContext:F,Provider:N,RequestResponseError:x,addons:G,combineParameters:W,controlOrMetaKey:K,controlOrMetaSymbol:Y,eventMatchesShortcut:q,eventToShortcut:V,experimental_requestResponse:Z,isMacLike:z,isShortcutTaken:J,keyToSymbol:Q,merge:$,mockChannel:j,optionOrAltSymbol:X,shortcutMatchesShortcut:oo,shortcutToHumanString:no,types:eo,useAddonState:co,useArgTypes:to,useArgs:ro,useChannel:Io,useGlobalTypes:ao,useGlobals:lo,useParameter:io,useSharedState:so,useStoryPrepared:uo,useStorybookApi:mo,useStorybookState:So}=(__STORYBOOK_API__,__STORYBOOK_API__),{A:po,ActionBar:Co,AddonPanel:ho,Badge:bo,Bar:To,Blockquote:_o,Button:Ao,ClipboardCode:go,Code:yo,DL:ko,Div:Bo,DocumentWrapper:Oo,EmptyTabContent:Ro,ErrorFormatter:Po,FlexBar:Lo,Form:Eo,H1:fo,H2:wo,H3:Do,H4:Mo,H5:vo,H6:Ho,HR:Uo,IconButton:Fo,IconButtonSkeleton:No,Icons:xo,Img:Go,LI:Wo,Link:Ko,ListItem:Yo,Loader:qo,Modal:Vo,OL:Zo,P:zo,Placeholder:Jo,Pre:Qo,ResetWrapper:$o,ScrollArea:jo,Separator:Xo,Spaced:on,Span:nn,StorybookIcon:en,StorybookLogo:cn,Symbols:tn,SyntaxHighlighter:rn,TT:In,TabBar:an,TabButton:ln,TabWrapper:sn,Table:un,Tabs:dn,TabsState:mn,TooltipLinkList:Sn,TooltipMessage:pn,TooltipNote:Cn,UL:hn,WithTooltip:bn,WithTooltipPure:Tn,Zoom:_n,codeCommon:An,components:gn,createCopyToClipboardFunction:yn,getStoryHref:kn,icons:Bn,interleaveSeparators:On,nameSpaceClassNames:Rn,resetComponents:Pn,withReset:Ln}=(__STORYBOOK_COMPONENTS__,__STORYBOOK_COMPONENTS__),{AccessibilityAltIcon:En,AccessibilityIcon:fn,AddIcon:wn,AdminIcon:Dn,AlertAltIcon:Mn,AlertIcon:vn,AlignLeftIcon:Hn,AlignRightIcon:Un,AppleIcon:Fn,ArrowDownIcon:Nn,ArrowLeftIcon:xn,ArrowRightIcon:Gn,ArrowSolidDownIcon:Wn,ArrowSolidLeftIcon:Kn,ArrowSolidRightIcon:Yn,ArrowSolidUpIcon:qn,ArrowUpIcon:Vn,AzureDevOpsIcon:Zn,BackIcon:zn,BasketIcon:Jn,BatchAcceptIcon:Qn,BatchDenyIcon:$n,BeakerIcon:jn,BellIcon:Xn,BitbucketIcon:oe,BoldIcon:ne,BookIcon:ee,BookmarkHollowIcon:ce,BookmarkIcon:te,BottomBarIcon:re,BottomBarToggleIcon:Ie,BoxIcon:ae,BranchIcon:le,BrowserIcon:ie,ButtonIcon:se,CPUIcon:ue,CalendarIcon:de,CameraIcon:me,CategoryIcon:Se,CertificateIcon:pe,ChangedIcon:Ce,ChatIcon:he,CheckIcon:be,ChevronDownIcon:Te,ChevronLeftIcon:_e,ChevronRightIcon:Ae,ChevronSmallDownIcon:ge,ChevronSmallLeftIcon:ye,ChevronSmallRightIcon:ke,ChevronSmallUpIcon:Be,ChevronUpIcon:Oe,ChromaticIcon:Re,ChromeIcon:Pe,CircleHollowIcon:Le,CircleIcon:Ee,ClearIcon:fe,CloseAltIcon:we,CloseIcon:De,CloudHollowIcon:Me,CloudIcon:ve,CogIcon:He,CollapseIcon:Ue,CommandIcon:Fe,CommentAddIcon:Ne,CommentIcon:xe,CommentsIcon:Ge,CommitIcon:We,CompassIcon:Ke,ComponentDrivenIcon:Ye,ComponentIcon:qe,ContrastIcon:Ve,ControlsIcon:Ze,CopyIcon:ze,CreditIcon:Je,CrossIcon:Qe,DashboardIcon:$e,DatabaseIcon:je,DeleteIcon:Xe,DiamondIcon:oc,DirectionIcon:nc,DiscordIcon:ec,DocChartIcon:cc,DocListIcon:tc,DocumentIcon:rc,DownloadIcon:Ic,DragIcon:ac,EditIcon:lc,EllipsisIcon:ic,EmailIcon:sc,ExpandAltIcon:uc,ExpandIcon:dc,EyeCloseIcon:mc,EyeIcon:Sc,FaceHappyIcon:pc,FaceNeutralIcon:Cc,FaceSadIcon:hc,FacebookIcon:bc,FailedIcon:Tc,FastForwardIcon:_c,FigmaIcon:Ac,FilterIcon:gc,FlagIcon:yc,FolderIcon:kc,FormIcon:Bc,GDriveIcon:Oc,GithubIcon:Rc,GitlabIcon:Pc,GlobeIcon:Lc,GoogleIcon:Ec,GraphBarIcon:fc,GraphLineIcon:wc,GraphqlIcon:Dc,GridAltIcon:Mc,GridIcon:vc,GrowIcon:Hc,HeartHollowIcon:Uc,HeartIcon:Fc,HomeIcon:Nc,HourglassIcon:xc,InfoIcon:Gc,ItalicIcon:Wc,JumpToIcon:Kc,KeyIcon:Yc,LightningIcon:qc,LightningOffIcon:Vc,LinkBrokenIcon:Zc,LinkIcon:zc,LinkedinIcon:Jc,LinuxIcon:Qc,ListOrderedIcon:$c,ListUnorderedIcon:jc,LocationIcon:Xc,LockIcon:ot,MarkdownIcon:nt,MarkupIcon:et,MediumIcon:ct,MemoryIcon:tt,MenuIcon:rt,MergeIcon:It,MirrorIcon:at,MobileIcon:lt,MoonIcon:it,NutIcon:st,OutboxIcon:ut,OutlineIcon:dt,PaintBrushIcon:mt,PaperClipIcon:St,ParagraphIcon:pt,PassedIcon:Ct,PhoneIcon:ht,PhotoDragIcon:bt,PhotoIcon:Tt,PinAltIcon:_t,PinIcon:At,PlayBackIcon:gt,PlayIcon:yt,PlayNextIcon:kt,PlusIcon:Bt,PointerDefaultIcon:Ot,PointerHandIcon:Rt,PowerIcon:Pt,PrintIcon:Lt,ProceedIcon:Et,ProfileIcon:ft,PullRequestIcon:wt,QuestionIcon:Dt,RSSIcon:Mt,RedirectIcon:vt,ReduxIcon:Ht,RefreshIcon:Ut,ReplyIcon:Ft,RepoIcon:Nt,RequestChangeIcon:xt,RewindIcon:Gt,RulerIcon:Wt,SearchIcon:Kt,ShareAltIcon:Yt,ShareIcon:qt,ShieldIcon:Vt,SideBySideIcon:Zt,SidebarAltIcon:zt,SidebarAltToggleIcon:Jt,SidebarIcon:Qt,SidebarToggleIcon:$t,SpeakerIcon:jt,StackedIcon:Xt,StarHollowIcon:or,StarIcon:nr,StickerIcon:er,StopAltIcon:cr,StopIcon:tr,StorybookIcon:rr,StructureIcon:Ir,SubtractIcon:ar,SunIcon:lr,SupportIcon:ir,SwitchAltIcon:sr,SyncIcon:ur,TabletIcon:dr,ThumbsUpIcon:mr,TimeIcon:Sr,TimerIcon:pr,TransferIcon:Cr,TrashIcon:hr,TwitterIcon:br,TypeIcon:Tr,UbuntuIcon:_r,UndoIcon:Ar,UnfoldIcon:gr,UnlockIcon:yr,UnpinIcon:kr,UploadIcon:Br,UserAddIcon:Or,UserAltIcon:Rr,UserIcon:Pr,UsersIcon:Lr,VSCodeIcon:Er,VerifiedIcon:fr,VideoIcon:wr,WandIcon:Dr,WatchIcon:Mr,WindowsIcon:vr,WrenchIcon:Hr,YoutubeIcon:Ur,ZoomIcon:Fr,ZoomOutIcon:Nr,ZoomResetIcon:xr,iconList:Gr}=(__STORYBOOK_ICONS__,__STORYBOOK_ICONS__),Wr="storybook/measure-addon",Kr=`${Wr}/tool`,Yr=()=>{let[n,e]=lo(),{measureEnabled:c}=n,t=mo(),r=_((()=>e({measureEnabled:!c})),[e,c]);return k((()=>{t.setAddonShortcut(Wr,{label:"Toggle Measure [M]",defaultShortcut:["M"],actionName:"measure",showInMenu:!1,action:r})}),[r,t]),o.createElement(Fo,{key:Kr,active:c,title:"Enable measure",onClick:r},o.createElement(Wt,null))};G.register(Wr,(()=>{G.add(Kr,{type:eo.TOOL,title:"Measure",match:({viewMode:o,tabId:n})=>"story"===o&&!n,render:()=>o.createElement(Yr,null)})}))})()}catch(e){console.error("[Storybook] One of your manager-entries failed: "+import.meta.url,e)}