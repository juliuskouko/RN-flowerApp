import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList,Image,Text,View } from 'react-native';
import profile from '../assets/images/profile.jpeg'
import img4 from '../assets/images/blueflower4.jpg'
import img5 from '../assets/images/flower5.jpg'
import img6 from '../assets/images/flower6.jpg'
// import img7 from '../assets/images/flower7.jpg'
// import img8 from '../assets/images/flower8.jpg'
import Item from '../components/Item';

const ListOfItems = () => {
    const minRead = ' mins read'
    const dot = '.'
    const items = [
        {
            img:img5,
            topic: 'Identification of successive flowering phases highlights a new genetic control of the flowering pattern in strawberry',
            author: 'McAnthony Joe',
            minutes: `${ 5 + minRead}`,
            profile: profile,
            article: "The genetic control of the switch between seasonal and perpetual flowering has been deciphered in various perennial species. However, little is known about the genetic control of the dynamics of perpetual flowering, which changes abruptly at well-defined time instants during the growing season. Here, we characterize the perpetual flowering pattern and identify new genetic controls of this pattern in the cultivated strawberry. Twenty-one perpetual flowering strawberry genotypes were phenotyped at the macroscopic scale for their course of emergence of inflorescences and stolons during the growing season. A longitudinal analysis based on the segmentation of flowering rate profiles using multiple change-point models was conducted. The flowering pattern of perpetual flowering genotypes takes the form of three or four successive phases: an autumn-initiated flowering phase, a flowering pause, and a single stationary perpetual flowering phase or two perpetual flowering phases, the second one being more intense. The genetic control of flowering was analysed by quantitative trait locus mapping of flowering traits based on these flowering phases. We showed that the occurrence of a fourth phase of intense flowering is controlled by a newly identified locus, different from the locus FaPFRU, controlling the switch between seasonal and perpetual flowering behaviour. The role of this locus was validated by the analysis of data obtained previously during six consecutive years.",
            id: 1
        },
        {
            img:img4,
            topic: 'Mineral and metabolic profiles in tea leaves and flowers during flower development.',
            author: 'McAnthony Joe',
            minutes: `${ 6 + minRead}`,
            profile: profile,
            article: 'Tea [Camellia sinensis (L.) O. Kuntze] is one of the most popular non-alcoholic beverage crops in the world, and the physiological processes and gene regulations involved in development in tea plants have been well characterized. However, relatively little is known about the metabolic changes combined with mineral distributions that occur during flower development. Here we detected the contents of 11 elements in tea leaves and flowers and found that, some of them, especially phosphorus, sulfur and copper, showed significant changes during tea flowering. We also detected 122 metabolites in tea leaves and flowers and found that, 72 of them showed significant differences between flowers and leaves, of which sugars, organic acids, and flavonoids dominated. The sugars, such as trehalose and galactose, all accumulated in tea flowers, and the organic acids, such as malic acid, citric acid and fumaric acid involved in TCA cycle. The flavonoids, like epicatechin, catechin gallate and epigallocatechin, were more abundant in leaves. Furthermore, we found that the contents of 33 metabolites changed during the development of flowers. Especially, citric acid, phenylalanine and most flavonoids decreased while fructose and galactose increased during flowering stages in flowers. We also analyzed the correlations between the ions and metabolites and found that, some mineral nutrients including phosphorus, sulfur, manganese and zinc had close relations to organic acids, flavonoids, sugars and several amino acids during flowering. We mapped the metabolic pathway according to the KEGG database. This work will serve as the foundation for a systems biology approach to the understanding of mineral metabolism. Copyright Â© 2016 Elsevier Masson SAS. All rights reserved.',
            id: 2
        },
        {
            img:img5,
            topic: 'Trees as huge flowers and flowers as oversized floral guides: the role of floral color change and retention of old flowers in Tibouchina pulchra',
            author: 'McAnthony Joe',
            minutes: `${ 8 + minRead}`,
            profile: profile,
            article: 'Floral color changes and retention of old flowers are frequently combined phenomena restricted to the floral guide or single flowers in few-flowered inflorescences. They are thought to increase the attractiveness over long distances and to direct nearby pollinators toward the rewarding flowers. In Tibouchina pulchra, a massively flowering tree, the whole flower changes its color during anthesis. On the first day, the flowers are white and on the next 3 days, they change to pink. This creates a new large-scale color pattern in which the white pre-changed flowers contrast against the pink post-changed ones over the entire tree. We describe the spectral characteristics of floral colors of T. pulchra and test bumblebeesâ€™ response to this color pattern when viewed at different angles (simulating long and short distances). The results indicated the role of different color components in bumblebee attraction and the possible scenario in which this flower color pattern has evolved. We tested bumblebeesâ€™ preference for simulated trees with 75% pink and 25% white flowers resembling the color patterns of T. pulchra, and trees with green leaves and pink flowers (control) in long-distance approach. We also compared an artificial setting with three pink flowers and one white flower (T. pulchra model) against four pink flowers with white floral guides (control) in short-distance approach. Bumblebees spontaneously preferred the simulated T. pulchra patterns in both approaches despite similar reward. Moreover, in short distances, pollinator visits to peripheral, non-rewarding flowers occurred only half as frequently in the simulated T. pulchra when compared to the control. Thefore, this exceptional floral color change and the retention of old flowers in T. pulchra favors the attraction of pollinators over long distances in a deception process while it honestly directs them toward the rewarding flowers at short distances possibly exploring their innate color preferences. PMID',
            id: 3
        },
        {
            img:img4,
            topic: 'Low flower-size variation in bilaterally symmetrical flowers: Support for the pollination precision hypothesis.',
            author: 'McAnthony Joe',
            minutes: `${ 8 + minRead}`,
            profile: profile,
            color: 'pink',
            article: 'The evolutionary shift from radial to bilateral symmetry in flowers is generally associated with the evolution of low flower-size variation. This phenomenon supports the hypothesis that the lower size variation in bilateral flowers can be attributed to low pollinator diversity. In this study, we propose two other hypotheses to explain low flower-size variation in bilateral symmetrical flowers. To test the three hypotheses, we examined the relative importance of pollinator diversity, composition, and bilateral symmetry itself as selective forces on low flower-size variation. We examined pollinator diversity and composition and flower-size variation for 36 species in a seminatural ecosystem with high bee richness and frequent lepidopteran visitation. Bilateral flowers were more frequently visited than radial flowers by larger bees, but functional-group diversity of the pollinators did not differ between symmetry types. Although bilateral flowers had significantly lower flower-size variation than radial flowers, flower-size variation did not vary with pollinator diversity and composition but was instead related to bilateral symmetry. Our results suggest that the lower size variation in bilateral flowers might have evolved under selection favoring the control of pollinator behavior on flowers to enhance the accurate placement of pollen on the body of the pollinator, independent of pollinator type. Because of the limited research on this issue, future work should be conducted in various types of plant-pollinator communities worldwide to further clarify the issue. Â© 2015 Botanical Society of America.',
            id: 4
        },
        {
            img:img5,
            topic: 'Molecular aspects of flower senescence and strategies to improve flower longevity',
            author: 'McAnthony Joe',
            minutes: `${ 8 + minRead}`,
            profile: profile,
            article: 'Flower longevity is one of the most important traits for ornamental plants. Ethylene plays a crucial role in flower senescence in some plant species. In several species that show ethylene-dependent flower senescence, genetic modification targeting genes for ethylene biosynthesis or signaling has improved flower longevity. Although little is known about regulatory mechanisms of petal senescence in flowers that show ethylene-independent senescence, a recent study of Japanese morning glory revealed that a NAC transcription factor, EPHEMERAL1 (EPH1), is a key regulator in ethylene-independent petal senescence. EPH1 is induced in an age-dependent manner irrespective of ethylene signal, and suppression of EPH1 expression dramatically delays petal senescence. In ethylene-dependent petal senescence, comprehensive transcriptome analyses revealed the involvement of transcription factors, a basic helix-loop-helix protein and a homeodomain-leucine zipper protein, in the transcriptional regulation of the ethylene biosynthesis enzymes. This review summarizes molecular aspects of flower senescence and discusses strategies to improve flower longevity by molecular breeding. PMID:29681752',
            id: 5
        },
        {
            img:img6,
            topic: 'Eating flowers? Exploring attitudes and consumers representation of edible flowers.',
            author: 'McAnthony Joe',
            minutes: `${ 8 + minRead}`,
            profile: profile,
            article: 'Edible flowers have gained more attention in recent years thanks to their perceived health benefits. Despite this attention, it seems that edible flowers are not popularized for consumption in South America, being considered unfamiliar for some cultures from this continent. In this context, the general goal of the present study was to investigate the three dimensions of social representation theory, the representational field, the information and the attitude of the two conditions of edible flowers: a more general "food made with flowers" and more directional product "yoghurt made with flowers", using Brazilian consumers. To achieve this goal, a free word association task was applied. A total of 549 consumers participated in this study. Participants were divided into two conditions, in which the inductor expressions for the free word association task changed: (a) food products made with flowers and (b) yoghurt made with flowers. Results showed a very positive attitude to both situations, and consumers associated Food products made with flowers to "health care" while the central core of yoghurt made with flowers reflected the innovative condition of this product, supported here by their unpredictable character (information generated). Copyright Â© 2017 Elsevier Ltd. All rights reserved.',
            id: 6
        },
    
    ]
    return (
        
        <FlatList
        data={items}
        renderItem={({item})=> {
            return (
              <Item
              img= {item.img}
              topic= {item.topic}
              author= {item.author}
              minutes= {item.minutes}
              profile= {item.profile}
              article= {item.article}
              color= {item.color}
              />
            )
        }}
        keyExtractor={(item,index)=>item.id }
        />
       
    );
}


const styles = StyleSheet.create({
    img: {
        width:50,
        height: 50
    },
})
export default ListOfItems;
