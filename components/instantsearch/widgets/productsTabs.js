import { Component } from 'react'
import { Tab, Tabs, Row, Col, NavItem, Nav } from 'react-bootstrap';
import { Flex, Box, Heading, Text } from '../../base';
import { Link } from '../../../routes';
import FaCaretDown from 'react-icons/lib/fa/caret-down';
import connectRefinementList from 'react-instantsearch/src/connectors/connectRefinementList';

class TabPuzzle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: 'all-type'
    };
    this.handleSelect = this.handleSelect.bind(this)
  }
  handleSelect(key) {
    this.setState({ key });
    if(key == 'blotter'){
      this.props.refine(["Blotter"]);
    } else if(key == 'conference-table-pads') {
      this.props.refine(["Conference Table Pad"]);
    } else if(key == 'placemats') {
      this.props.refine(["Placemat"]);
    } else{
      this.props.refine([]);
    }
  }
  componentDidMount(){
    if(this.props.activeTab){
      this.setState({ key: this.props.activeTab});
    }
  }
  render() {
    const style = {
      img: {
        maxHeight: '7em'
      },
      list: {
        listStyle: 'disc'
      }
    }
    return (
      <Box px2 className="conference">
        <Tab.Container id="tabs" activeKey={this.state.key} onSelect={this.handleSelect}>
          <Row className="main-category">
            <Col sm={12}>
              <Nav bsStyle="tabs">
                <NavItem eventKey="all-type">
                  <Link route="category" params={{tabs: 'run', category: 'conference-room-accessories', subcategory: 'conference-table-pads' }}>
                    <span>View All Types <FaCaretDown /></span>
                  </Link>
                </NavItem>
                <NavItem eventKey="conference-table-pads">
                  <Link route="category" params={{tabs: 'run', category: 'conference-room-accessories', subcategory: 'conference-table-pads' }}>
                    <span>Conference Table Pad <FaCaretDown /></span>
                  </Link>
                </NavItem>
                <NavItem eventKey="blotter">
                  <Link route="category" params={{tabs: 'run', category: 'conference-room-accessories', subcategory: 'conference-table-pads' }}>
                    <span>Blotter <FaCaretDown /></span>
                  </Link>
                </NavItem>
                <NavItem eventKey="placemats">
                  <Link route="category" params={{tabs: 'run', category: 'conference-room-accessories', subcategory: 'conference-table-pads' }}>
                    <span>Placement  <FaCaretDown /></span>
                  </Link>
                </NavItem>
              </Nav>
            </Col>
            <Col sm={12}>
              <Tab.Content animation>
                <Tab.Pane eventKey="all-type">
                  <Box p2>
                    <Heading is="h4" center>View All Types</Heading>
                    <Flex justifyContent="space-around">
                      <Box width={1 / 4} px3 py2 center onClick={() => this.handleSelect('conference-table-pads')} fontSize="0.8em">
                        <Link route="category" params={{tabs: 'run', category: 'conference-room-accessories', subcategory: 'conference-table-pads' }}>
                          <Box>
                            <img className="img-responsive" src="https://storage.googleapis.com/next-teo.appspot.com/static/conference table tabs/conf-pads-ft.jpg" />
                            <Text bold mt2>Conference Table Pad</Text>
                            <Text>Most Popular</Text>
                          </Box>
                        </Link>
                      </Box>
                      <Box width={1 / 4} px3 py2 center onClick={() => this.handleSelect('blotter')} fontSize="0.8em">
                      <Link route="category" params={{tabs: 'run', category: 'conference-room-accessories', subcategory: 'conference-table-pads' }}>
                          <Box>
                            <img className="img-responsive" src="https://storage.googleapis.com/next-teo.appspot.com/static/conference table tabs/blotters-ft.jpg" />
                            <Text bold mt2>Blotter</Text>
                            <Text>Traditional Style</Text>
                          </Box>
                        </Link>
                      </Box>
                      <Box width={1 / 4} px3 py2 center onClick={() => this.handleSelect('placemats')} fontSize="0.8em">
                        <Link route="category" params={{tabs: 'run', category: 'conference-room-accessories', subcategory: 'placemats' }}>
                          <Box>
                            <img className="img-responsive" src="https://storage.googleapis.com/next-teo.appspot.com/static/conference table tabs/cps-placemat-s.jpg" />
                            <Text bold mt2>Placemat</Text>
                            <Text>Working Lunches</Text>
                          </Box>
                        </Link>
                      </Box>
                    </Flex>
                  </Box>
                </Tab.Pane>
                <Tab.Pane eventKey="conference-table-pads">
                  <Flex py2 px4 alignItems="center" justifyContent="space-around">
                    <Box is="img"
                      css={style.img} src="https://storage.googleapis.com/next-teo.appspot.com/static/conference table tabs/conf-pads-ft.jpg" />
                    <Box is='ul' css={style.list}><li>The choice for executive meeting rooms</li><li>Optimal writing surface</li><li>Sturdy design holds up to laptops &amp; binders</li></Box>
                  </Flex>
                </Tab.Pane>
                <Tab.Pane eventKey="blotter">
                <Flex py2 px4 alignItems="center" justifyContent="space-around">
                    <Box is="img"
                      css={style.img} src="https://storage.googleapis.com/next-teo.appspot.com/static/conference table tabs/blotters-ft.jpg" />
                    <Box is='ul' css={style.list}><li>Traditional style with padded side-rails</li><li>Durable writing surface</li><li>Spacious size suitable for larger tables</li></Box>
                  </Flex>
                </Tab.Pane>
                <Tab.Pane eventKey="placemats">
                <Flex py2 px4 alignItems="center" justifyContent="space-around">
                    <Box is="img"
                      css={style.img} src="https://storage.googleapis.com/next-teo.appspot.com/static/conference table tabs/cps-placemat-s.jpg" />
                    <Box is='ul' css={style.list}><li>Versatile style with sophisticated looks</li><li>Ideal for dining applications</li><li>Low-profile design with cushioned feel</li></Box>
                  </Flex>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Box>
    )
  }
}

const ProductTabs = connectRefinementList(TabPuzzle);

export default ProductTabs;